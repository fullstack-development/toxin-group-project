import { boundMethod } from 'autobind-decorator';

import Firebase from '../Firebase';
import { UserCredential, Unsubscribe, User } from '../types';
import { ProfileData } from './types';

import apiErrors from './errors/apiErrors';
import AuthError from './errors/AuthError';

class Auth {
  private readonly actions: Firebase;

  constructor(actions: Firebase) {
    this.actions = actions;
  }

  @boundMethod
  public async signUp(data: ProfileData): Promise<UserCredential> {
    let credential: UserCredential;

    try {
      credential = await this.actions.createUser(data.email, data.password);
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use': throw apiErrors.create('email-is-taken', data.email);
        case 'auth/weak-password': throw apiErrors.create('weak-password');
        default: throw new AuthError();
      }
    }

    const user = this.actions.getCurrentUser();
    user.sendEmailVerification();

    return credential;
  }

  @boundMethod
  public async signIn(email: string, password: string): Promise<UserCredential> {
    let credential: UserCredential;

    try {
      credential = await this.actions.signIn(email, password);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password': throw apiErrors.create('wrong-password');
        default: throw new AuthError();
      }
    }

    return credential;
  }

  @boundMethod
  public async signOut(): Promise<void> {
    return this.actions.signOut();
  }

  @boundMethod
  public async resetPassword(email: string): Promise<void> {
    let resetPassword: void;

    try {
      resetPassword = await this.actions.resetPassword(email);
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found': throw apiErrors.create('user-not-found');
        default: throw new AuthError();
      }
    }

    return resetPassword;
  }

  @boundMethod
  public onStateChanged(fn: (user: User) => unknown): Unsubscribe {
    return this.actions.onAuthStateChanged(fn);
  }
}

export default Auth;
