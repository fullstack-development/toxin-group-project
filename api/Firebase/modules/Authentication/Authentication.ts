import { boundMethod } from 'autobind-decorator';
import firebase from 'firebase';

import { Auth, UserCredential, User, Unsubscribe } from './types';

class Authentication {
  private readonly auth: Auth;

  constructor(module: Auth) {
    this.auth = module;
  }

  @boundMethod
  public async createUser(email: string, password: string): Promise<UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  @boundMethod
  public async signIn(email: string, password: string): Promise<UserCredential> {
    return this.auth.app
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return this.auth.signInWithEmailAndPassword(email, password);
      });
  }

  @boundMethod
  public signInWithGoogle(): Promise<UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }

  @boundMethod
  public async signOut(): Promise<void> {
    return this.auth.signOut();
  }

  @boundMethod
  public async resetPassword(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }

  @boundMethod
  public getCurrentUser(): User {
    return this.auth.currentUser;
  }

  @boundMethod
  public onAuthStateChanged(fn: (user: User) => unknown): Unsubscribe {
    return this.auth.onAuthStateChanged(fn);
  }
}

export default Authentication;
