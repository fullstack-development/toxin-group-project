import { boundMethod } from 'autobind-decorator';

import firebase from '../firebase';
import { ApartmentsList } from './types';

class Apartments {
  private readonly path: string;

  constructor() {
    this.path = 'apartments';
  }

  @boundMethod
  public async load(key = ''): Promise<ApartmentsList> {
    const response = await firebase.request(`${this.path}/${key}`).then((s) => s.val());
    return response;
  }
}

export default Apartments;
