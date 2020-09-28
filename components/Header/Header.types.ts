export type AccountData = {
  userName: string;
  pathToProfile: string;
};

export type HeaderProps = {
  authData?: AccountData;
};
