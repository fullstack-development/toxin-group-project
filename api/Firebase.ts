import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { Authentication } from './modules/Authentication';
import { Database } from './modules/Database';
import { FirebaseApplication, IConfig } from './types';

class Firebase {
  public authentication: Authentication;
  public database: Database;
  private app: FirebaseApplication;

  constructor() {
    this.init();
  }

  private init(): void {
    this.app = !firebase.apps.length ? firebase.initializeApp(this.getConfig()) : firebase.app();
    this.authentication = new Authentication(this.app.auth());
    this.database = new Database(this.app.firestore());
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
