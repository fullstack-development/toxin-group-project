export type Props = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  startAuthProcess: ({ email, password }) => void;
  stopAuthProcess: () => void;
};
