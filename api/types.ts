export type FirebaseApplication = firebase.app.App;
export type Auth = firebase.auth.Auth;
export type UserCredential = firebase.auth.UserCredential;
export type Unsubscribe = firebase.Unsubscribe;
export type User = firebase.User;
export type DB = firebase.firestore.Firestore;
export type DocumentData = firebase.firestore.DocumentData;
export type CollectionReference = firebase.firestore.CollectionReference<DocumentData>;
export type DocumentReference = firebase.firestore.DocumentReference<DocumentData>;

export interface IConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

type PostToNonExistedDocument = {
  ref: CollectionReference;
  doc?: null;
  merge?: null;
  data: { [k: string]: unknown };
};

type PostToExistedDocument = {
  ref: CollectionReference;
  doc: string;
  merge?: boolean;
  data: { [k: string]: unknown };
};

export type Post = PostToNonExistedDocument | PostToExistedDocument;
