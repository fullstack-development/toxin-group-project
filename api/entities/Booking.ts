import { boundMethod } from 'autobind-decorator';
import { nanoid } from 'nanoid';

import { matchObjects } from 'shared/helpers';

import { Database, CollectionReference, QuerySnapshot } from '../Firebase/modules/Database';
import { BookingData } from './types';

class Booking {
  private readonly actions: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.reference = this.actions.ref().collection('booked');
  }

  @boundMethod
  public add(data: BookingData): void {
    const uniqueId = nanoid();

    this.actions.post({
      ref: this.reference,
      doc: uniqueId,
      data: { ...data, id: uniqueId },
    });
  }

  @boundMethod
  public remove(id: string): void {
    this.actions.removeDocument(this.reference.doc(id));
  }

  @boundMethod
  public update(id: string, data: Partial<BookingData>): void {
    this.actions.update(this.reference.doc(id), data);
  }

  @boundMethod
  public async getBooked(from: number, to: number): Promise<number[]> {
    function addIDsToStorage(snapshot: QuerySnapshot, storage: BookingData[]) {
      snapshot.forEach((doc) => storage.push(doc.data() as BookingData));
    }

    const bookedStorage: BookingData[] = [];
    const bookedBeforeTo = this.reference.where('from', '<=', to).get();
    await bookedBeforeTo.then((snapshot) => addIDsToStorage(snapshot, bookedStorage));

    const unbookedStorage: BookingData[] = [];
    const unbookedAfterFrom = this.reference.where('to', '>=', from).get();
    await unbookedAfterFrom.then((snapshot) => addIDsToStorage(snapshot, unbookedStorage));

    const result: Set<number> = new Set();

    bookedStorage.forEach((booked) => {
      unbookedStorage.forEach((unbooked) => {
        matchObjects(booked, unbooked) && result.add(booked.apartmentId);
      });
    });

    return Array.from(result);
  }
}

export default Booking;
