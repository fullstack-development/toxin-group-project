import { boundMethod } from 'autobind-decorator';

import Firebase from '../Firebase';
import { Unsubscribe, User } from '../types';

class Auth {
  private readonly actions: Firebase;

  constructor(actions: Firebase) {
    this.actions = actions;
  }

  @boundMethod
  public onStateChanged(fn: (user: User) => unknown): Unsubscribe {
    return this.actions.onAuthStateChanged(fn);
  }
}

export default Auth;
