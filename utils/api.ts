import firebase from './firebase';

type DataSnapshot = firebase.database.DataSnapshot;

class Api {
  constructor() {
    this.getData = this.getData.bind(this);
  }

  public getData(
    value: string,
    callback: (a: DataSnapshot, b?: string) => any,
    watch = true,
  ): ((a: DataSnapshot, b?: string) => any) | Promise<DataSnapshot> {
    return firebase.getData(value, callback, watch);
  }
}

export default new Api();
