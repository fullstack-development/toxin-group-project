import * as fireB from 'firebase/app';
import 'firebase/database';
import { FirebaseOptions } from '@firebase/app-types';
import { Database, DataSnapshot } from '@firebase/database-types';

class Firebase {
  public firebase: any;

  public database: Database;

  constructor() {
    this.getData = this.getData.bind(this);
    this.init();
  }

  public getData(
    value: string,
    callback: (a: DataSnapshot, b?: string | null) => any,
    watch = true,
  ): any {
    const ref = this.database.ref(value);
    const subscription = watch ? 'on' : 'once';

    return ref[subscription]('value', callback);
  }

  private init(): void {
    const config: FirebaseOptions = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    this.firebase = !fireB.apps.length
      ? fireB.initializeApp(config)
      : fireB.app();

    this.database = this.firebase.database();
  }
}

const { firebase, database, getData } = new Firebase();

export { firebase, database, getData };
