import { boundMethod } from 'autobind-decorator';

import Firebase from '../Firebase';
import { UserCredential, Unsubscribe, User } from '../types';
import { ProfileData } from './types';

class Auth {
  private readonly actions: Firebase;

  constructor(actions: Firebase) {
    this.actions = actions;
  }

  @boundMethod
  public async signUp(data: ProfileData): Promise<UserCredential> {
    const credential = await this.actions.createUser(data.email, data.password);
    const user = this.actions.getCurrentUser();
    user.sendEmailVerification();

    return credential;
  }

  @boundMethod
  public async signIn(email: string, password: string): Promise<UserCredential> {
    return this.actions.signIn(email, password);
  }

  @boundMethod
  public onStateChanged(fn: (user: User) => unknown): Unsubscribe {
    return this.actions.onAuthStateChanged(fn);
  }
}

export default Auth;
