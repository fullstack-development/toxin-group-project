import { boundMethod } from 'autobind-decorator';

import {
  Authentication,
  UserCredential,
  Unsubscribe,
  User,
} from '../Firebase/modules/Authentication';
import apiErrors from './errors/apiErrors';
import AuthError from './errors/AuthError';
import { ProfileData } from './types';

class Auth {
  private readonly actions: Authentication;

  constructor(actions: Authentication) {
    this.actions = actions;
  }

  @boundMethod
  public async signUp({
    name,
    surname,
    email,
    password,
    gender,
  }: ProfileData): Promise<UserCredential> {
    let credential: UserCredential;

    try {
      credential = await this.actions.createUser(email, password);
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          throw apiErrors.trigger('auth/email-is-taken', email);

        case 'auth/weak-password':
          throw apiErrors.trigger('auth/weak-password');

        default:
          throw new AuthError();
      }
    }

    const user = this.actions.getCurrentUser();

    user
      .updateProfile({
        displayName: `${name} ${surname}`,
        photoURL: gender === 'female' ? '/img/avatar-female.jpg' : '/img/avatar-male.jpg',
      })
      .then(() => user.sendEmailVerification());

    return credential;
  }

  @boundMethod
  public async signIn(email: string, password: string): Promise<UserCredential> {
    let credential: UserCredential;

    try {
      credential = await this.actions.signIn(email, password);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          throw apiErrors.trigger('auth/wrong-password');

        default:
          throw new AuthError();
      }
    }

    return credential;
  }

  @boundMethod
  public async signOut(): Promise<void> {
    return this.actions.signOut();
  }

  @boundMethod
  public async signInWithGoogle(): Promise<UserCredential> {
    return this.actions.signInWithGoogle();
  }

  @boundMethod
  public async resetPassword(email: string): Promise<void> {
    let resetPassword: void;

    try {
      resetPassword = await this.actions.resetPassword(email);
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          throw apiErrors.trigger('auth/user-not-found');

        default:
          throw new AuthError();
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
