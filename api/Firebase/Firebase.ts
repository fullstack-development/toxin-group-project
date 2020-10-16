import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from './config';
import { Authentication } from './modules/Authentication';
import { Database } from './modules/Database';
import { FirebaseApplication } from './types';

class Firebase {
  public readonly database: Database;
  public readonly authentication: Authentication;
  private readonly app: FirebaseApplication;

  constructor() {
    this.app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    this.database = new Database(this.app.firestore());
    this.authentication = new Authentication(this.app.auth());
  }
}

export default Firebase;
