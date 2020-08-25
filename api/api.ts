import Apartments from './entities/Apartments';

class Api {
  public apartments: Apartments;

  constructor() {
    this.apartments = new Apartments();
  }
}

export default new Api();
