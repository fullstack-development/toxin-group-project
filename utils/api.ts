import { boundMethod } from 'autobind-decorator';
import firebase from './firebase';

type DataSnapshot = firebase.database.DataSnapshot;

class Api {
  @boundMethod
  public getData(
    value: string,
    callback: (a: DataSnapshot, b?: string) => any,
    watch = true,
  ): ((a: DataSnapshot, b?: string) => any) | Promise<DataSnapshot> {
    return firebase.getData(value, callback, watch);
  }
}

export default new Api();
