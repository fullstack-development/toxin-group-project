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

  private async getBookedRooms(from: Date, to: Date): Promise<BookingData[]> {
    const result = [];
    const allBookedRooms = await this.booked
      .get()
      .then((snapshot) => this.addDataToStorage(snapshot, []));

    await this.booked
      .where('from', '>=', to)
      .get()
      .then((snapshot) => this.addDataToStorage(snapshot, result));

    await this.booked
      .where('to', '<=', from)
      .get()
      .then((snapshot) => this.addDataToStorage(snapshot, result));

    return allBookedRooms.filter((room) => !result.find((el) => el.id === room.id));
  }

  public async getFreeRooms(from: Date, to: Date): Promise<Apartment[]> {
    const allRooms = await this.apartments
      .get()
      .then((snapshot) => this.addDataToStorage(snapshot, []));

    const bookedRooms = await this.getBookedRooms(from, to);

    return allRooms.filter((room) => !bookedRooms.find((bookedRoom) => bookedRoom.id === room.id));
  }

  public async filterRooms(options: Filters): Promise<Apartment[]> {
    const rooms = await this.getFreeRooms(
      new Date(options.booked.timestampFrom),
      new Date(options.booked.timestampTo),
    );

    const comparableOptions: (keyof Filters)[] = [
      'amenities',
      'additionalAmenities',
      'accessibility',
      'opportunities',
    ];
    return rooms.filter((room) => {
      const matchesOptions = comparableOptions.every((option) =>
        matchObjects(options[option], room[option]),
      );

      const matchesPrice = options.price.from < room.price && options.price.to > room.price;

      return matchesOptions && matchesPrice;
    });
  }

  // TODO: создать метод удаления просроченных полей

  private addDataToStorage<T extends BookingData | Apartment>(
    snapshot: QuerySnapshot,
    storage: T[],
  ) {
    snapshot.forEach((doc) => storage.push(doc.data() as T));
    return storage;
  }
}

export default Booking;
