import { boundMethod } from 'autobind-decorator';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import apiErrors from './entities/errors/apiErrors';
import DatabaseError from './entities/errors/DatabaseError';
import {
  FirebaseApplication,
  DatabaseReference,
  DataSnapshot,
  Auth,
  UserCredential,
  Unsubscribe,
  IConfig,
  User,
} from './types';

class Firebase {
  private app: FirebaseApplication;
  private auth: Auth;

  constructor() {
    this.init();
  }

  @boundMethod
  public async request(value: string): Promise<DataSnapshot> {
    let request: DataSnapshot;

    try {
      request = await this.getRef(value).once('value');
    } catch (err) {
      switch (err.code) {
        default: throw new DatabaseError();
      }
    }

    return request;
  }

  @boundMethod
  public post(field: string, data: unknown): void {
    this.getRef(field).set(data);
  }

  @boundMethod
  public remove(field: string): void {
    if (field === '/') throw apiErrors.create('complete-clean-up');
    this.getRef(field).remove();
  }

  @boundMethod
  public update(data: {}): void {
    this.getRef().update(data);
  }

  @boundMethod
  public async createUser(email: string, password: string): Promise<UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  @boundMethod
  public async signIn(email: string, password: string): Promise<UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
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

  private init(): void {
    this.app = !firebase.apps.length
      ? firebase.initializeApp(this.getConfig())
      : firebase.app();

    this.auth = this.app.auth();
  }

  private getRef(value?: string): DatabaseReference {
    return this.app.database().ref(value);
  }

  private getConfig(): IConfig {
    return {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };
  }
}

export default Firebase;
