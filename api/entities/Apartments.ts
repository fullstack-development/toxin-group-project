import { boundMethod } from 'autobind-decorator';

import { DeepPartial } from 'shared/types/custom';
import { matchObjects } from 'shared/helpers';

import Firebase from '../Firebase';
import apiErrors from './errors/apiErrors';
import { ApartmentsList, Apartment } from './types';

class Apartments {
  private readonly path: string;
  private readonly actions: Firebase;

  constructor(actions: Firebase) {
    this.path = 'apartments';
    this.actions = actions;
  }

  @boundMethod
  public async load(key = ''): Promise<ApartmentsList> {
    const request = await this.actions.request(`${this.path}/${key}`).then((s) => s.val());
    if (request === null) throw apiErrors.create('nothing-found', key);
    return request;
  }

  @boundMethod
  public add(id: number, apartment: Apartment): void {
    this.actions.post(`${this.path}/${id}`, apartment);
  }

  @boundMethod
  public filter(apartmentsList: ApartmentsList, params: DeepPartial<Apartment>): ApartmentsList {
    const result: ApartmentsList = { ...apartmentsList };

    Object.entries(apartmentsList).forEach(([key, apartment]) => {
      !matchObjects(apartment, params) && delete result[key];
    });

    return result;
  }
}

export default Apartments;
