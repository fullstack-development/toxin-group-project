import { boundMethod } from 'autobind-decorator';
import { nanoid } from 'nanoid';

import { matchObjects } from 'shared/helpers';

import { Database, CollectionReference, QuerySnapshot } from '../Firebase/modules/Database';
import { BookingData, Apartment, Filters } from './types';

// function convertToDate(t: Timestamp): Date {
//   return new Date(t.seconds * 1000);
// }

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
  // NOTE: Подумать над форматом аргументов, думаю надежным вариантом будет объект даты
  public async getBooked(from: number, to: number): Promise<number[]> {
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

  public async getFreeRooms(): Promise<Apartment[]> {
    const allRooms = await this.apartments.get().then((querySnapshot) => {
      const result: Apartment[] = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data() as Apartment);
      });
      return result;
    });

    const bookedRooms = await this.booked.get().then((querySnapshot) => {
      const result: BookingData[] = [];
      querySnapshot.forEach((doc) => {
        const bookedRoom = doc.data() as BookingData;
        result.push(bookedRoom);
      });
      return result;
    });

    return allRooms.filter(
      (room) => !bookedRooms.map((bookedRoom) => bookedRoom.id).includes(room.id),
    );
  }

  public async filterRooms(options: Filters): Promise<Apartment[]> {
    const rooms = await this.getFreeRooms();

    const comparableOptions: (keyof Filters)[] = [
      'amenities',
      'additionalAmenities',
      'accessibility',
      'opportunities',
    ];
    return rooms.filter((room) => {
      const matchComparable = comparableOptions.every((option) =>
        matchObjects(options[option], room[option]),
      );

      const matchPrice = options.price.from < room.price && options.price.to > room.price;
      return matchComparable && matchPrice;
    });

    // Object.keys(options).forEach((option) => {
    //   if (comparableOptions.includes(option))
    // })
  }

  // TODO: создать метод удаления просроченных полей
}

export default Booking;
