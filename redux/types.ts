export type Action<T> = {
  type: string;
  payload?: T;
};

export type AuthData = {
  email: string;
  password: string;
};
