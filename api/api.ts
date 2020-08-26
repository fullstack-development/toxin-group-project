import Apartments from './entities/Apartments';
import Firebase from './Firebase';

class Api {
  public readonly apartments: Apartments;

  constructor() {
    const actions = new Firebase();
    this.apartments = new Apartments(actions);
  }
}

export default new Api();
