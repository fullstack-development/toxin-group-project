export type Action<T> = {
  type: string;
  payload?: T;
};

export type AuthData = {
  email: string;
  password: string;
};

export type State = {
  hasAuth?: boolean;
  authStatusText?: string;
  displayName?: string;
};
