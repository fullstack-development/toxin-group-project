import { boundMethod } from 'autobind-decorator';

import Apartments from './entities/Apartments';
import firebase from './firebase';

type DataSnapshot = firebase.database.DataSnapshot;

class Api {
  public apartments: Apartments;

  constructor() {
    this.apartments = new Apartments();
  }

  @boundMethod
  public request(
    value: string,
    callback: (a: DataSnapshot, b?: string) => any,
    watch = true,
  ): ((a: DataSnapshot, b?: string) => any) | Promise<DataSnapshot> {
    return firebase.request(value, callback, watch);
  }

  @boundMethod
  public post(field: string, data: any): void {
    firebase.post(field, data);
  }

  @boundMethod
  public remove(field: string): void {
    firebase.remove(field);
  }
}

export default new Api();
