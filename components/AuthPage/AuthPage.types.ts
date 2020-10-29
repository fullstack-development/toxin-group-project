export type Props = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  wasFinishedAuthChecking?: boolean;
  authStatusText: string;
  checkAuthBeforePageLoaded?: () => void;
  startAuthProcess: ({ email, password }) => void;
  startGoogleAuthProcess: () => void;
  stopAuthProcess: () => void;
};

export type State = {
  auth: Props;
};
