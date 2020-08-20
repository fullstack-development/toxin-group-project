import { boundMethod } from 'autobind-decorator';
import * as firebase from 'firebase/app';
import 'firebase/database';

type FirebaseApplication = firebase.app.App;
type DataSnapshot = firebase.database.DataSnapshot;

interface IConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

class Firebase {
  private app: FirebaseApplication;

  constructor() {
    this.init();
  }

  @boundMethod
  public getData(
    value: string,
    callback: (a: DataSnapshot, b?: string) => any,
    watch = true,
  ): ((a: DataSnapshot, b?: string) => any) | Promise<DataSnapshot> {
    const ref = this.app.database().ref(value);
    const method = watch ? 'on' : 'once';

    return ref[method]('value', callback);
  }

  private init(): void {
    this.app = !firebase.apps.length
      ? firebase.initializeApp(this.getConfig())
      : firebase.app();
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
