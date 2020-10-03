import { Auth, Apartments } from './entities';
import { Firebase } from './Firebase';

class Api {
  public readonly auth: Auth;
  public readonly apartments: Apartments;

  constructor() {
    const { authentication, database } = new Firebase();
    this.auth = new Auth(authentication);
    this.apartments = new Apartments(database);
  }
}

export default new Api();
