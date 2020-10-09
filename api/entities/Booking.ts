import { boundMethod } from 'autobind-decorator';
import { nanoid } from 'nanoid';

import { matchObjects } from 'shared/helpers';

import { Database, CollectionReference, QuerySnapshot } from '../Firebase/modules/Database';
import { BookingData, Apartment, Filters } from './types';

class Booking {
  private readonly actions: Database;
  private readonly booked: CollectionReference;
  private readonly apartments: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.booked = this.actions.ref().collection('booked');
    this.apartments = this.actions.ref().collection('apartments');
  }

  @boundMethod
  public add(data: BookingData): void {
    const uniqueId = nanoid();

    this.actions.post({
      ref: this.booked,
      doc: uniqueId,
      data: { ...data, id: uniqueId },
    });
  }

  @boundMethod
  public remove(id: string): void {
    this.actions.removeDocument(this.booked.doc(id));
  }

  @boundMethod
  public update(id: string, data: Partial<BookingData>): void {
    this.actions.update(this.booked.doc(id), data);
  }

  @boundMethod
  public async filterRooms(options: Filters): Promise<Apartment[]> {
    const { price, booked } = options;
    const affordableRooms: Apartment[] = await this.apartments
      .where('price', '<=', price.to)
      .where('price', '>=', price.from)
      .get()
      .then((snapshot) => this.addDataToStorage(snapshot, []));

    const bookedRoomIDs = await this.getBooked(
      new Date(booked.timestampFrom),
      new Date(booked.timestampTo),
    );

    const availableRooms = affordableRooms.filter((room) => !bookedRoomIDs.includes(room.id));

    const comparableOptions: (keyof Filters)[] = [
      'amenities',
      'additionalAmenities',
      'accessibility',
      'opportunities',
    ];
    return availableRooms.filter((room) =>
      comparableOptions.every((option) => this.areRequirementsMet(options[option], room[option])),
    );
  }

  @boundMethod
  public async getBooked(from: Date, to: Date): Promise<number[]> {
    function addIDsToStorage(snapshot: QuerySnapshot, storage: BookingData[]) {
      snapshot.forEach((doc) => storage.push(doc.data() as BookingData));
    }

    const bookedStorage: BookingData[] = [];
    const bookedBeforeTo = this.booked.where('from', '<=', to).get();
    await bookedBeforeTo.then((snapshot) => addIDsToStorage(snapshot, bookedStorage));

    const unbookedStorage: BookingData[] = [];
    const unbookedAfterFrom = this.booked.where('to', '>=', from).get();
    await unbookedAfterFrom.then((snapshot) => addIDsToStorage(snapshot, unbookedStorage));

    const result: Set<number> = new Set();

    bookedStorage.forEach((booked) => {
      unbookedStorage.forEach((unbooked) => {
        matchObjects(booked, unbooked) && result.add(booked.id);
      });
    });

    return Array.from(result);
  }

  // TODO: создать метод удаления просроченных полей

  private addDataToStorage<T extends BookingData | Apartment>(
    snapshot: QuerySnapshot,
    storage: T[],
  ) {
    snapshot.forEach((doc) => storage.push(doc.data() as T));
    return storage;
  }

  private areRequirementsMet<T extends { [k: string]: boolean | number }>(
    userOption: T,
    roomOption: T,
  ): boolean {
    return Object.keys(userOption).every((prop) => {
      const userValue = userOption[prop];
      const roomValue = roomOption[prop];

      return roomValue >= userValue;
    });
  }
}

export default Booking;
