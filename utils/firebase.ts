import { boundMethod } from 'autobind-decorator';

import * as firebase from 'firebase/app';
import 'firebase/database';

import {
  FirebaseApplication,
  DatabaseReference,
  DataSnapshot,
  IConfig,
} from './types';

class Firebase {
  private app: FirebaseApplication;

  constructor() {
    this.init();
  }

  @boundMethod
  public async request(value: string): Promise<DataSnapshot> {
    const response = await this.getRef(value).once('value');
    return response;
  }

  @boundMethod
  public post(field: string, data: unknown): void {
    this.getRef(field).set(data);
  }

  @boundMethod
  public remove(field: string): void {
    if (field === '/') throw new Error('Trying to clean up the database');
    this.getRef(field).remove();
  }

  @boundMethod
  public update(data: {}): void {
    this.getRef().update(data);
  }

  private init(): void {
    this.app = !firebase.apps.length
      ? firebase.initializeApp(this.getConfig())
      : firebase.app();
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

export default new Firebase();
