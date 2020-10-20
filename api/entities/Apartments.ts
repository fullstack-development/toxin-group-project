import { boundMethod } from 'autobind-decorator';

import { Database, CollectionReference } from '../Firebase/modules/Database';
import { Apartment } from './types';

class Apartments {
  private readonly actions: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.reference = this.actions.ref().collection('apartments');
  }

  @boundMethod
  public async add(data: Apartment): Promise<void> {
    this.actions.post({ ref: this.reference, doc: String(data.id), data });
  }

  @boundMethod
  public async remove(id: Apartment['id']): Promise<void> {
    this.actions.removeDocument(this.reference.doc(String(id)));
  }

  @boundMethod
  public update(id: Apartment['id'], data: Partial<Apartment>): void {
    this.actions.update(this.reference.doc(String(id)), data);
  }

  @boundMethod
  public async load(id: Apartment['id']): Promise<Apartment> {
    return this.actions.getDocument(this.reference, String(id));
  }

  // @boundMethod
  // public async updateAll(data) {
  //   function getRandomInt(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  //   // const result = [];
  //   const keyValues = await this.reference.get();
  //   keyValues.forEach((snapshot) => {
  //     const { id } = snapshot.data();
  //     // const { beds } = snapshot.data().amenities;
  //     // const id = 26;
  //     this.update(id, {
  //       // overcrowdingPrice: 700,
  //       // maxGuestsCount: {
  //       //   adults: beds + 1,
  //       //   babies: getRandomInt(1, 3),
  //       // },
  //       breakfastPricePerGuest: 300,
  //     });
  //   });
  // }
}

export default Apartments;
