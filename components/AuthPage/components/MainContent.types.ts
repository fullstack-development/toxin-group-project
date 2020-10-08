export type Props = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  requestToAuth: ({ email, password }) => void;
  breakAuthProcess: () => void;
};
