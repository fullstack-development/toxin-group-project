export type FirebaseApplication = firebase.app.App;
export type DatabaseReference = firebase.database.Reference;
export type DataSnapshot = firebase.database.DataSnapshot;

export interface IConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}
