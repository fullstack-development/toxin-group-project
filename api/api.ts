import { Auth, Apartments } from './entities';
import Firebase from './Firebase';

class Api {
  public readonly auth: Auth;
  public readonly apartments: Apartments;

  constructor() {
    const actions = new Firebase();
    this.auth = new Auth(actions);
    this.apartments = new Apartments(actions);
  }
}

export default new Api();
