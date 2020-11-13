import {
  AuthData,
  RequestToAuth,
  RequestToAuthWithGoogle,
  PreloadAuthData,
  BreakAuthProcess,
  LogoutProcess,
  PasswordResetRequest,
  PasswordResetCompleted,
} from '../model';

const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: 'AUTH_PROCESS',
  payload: data,
});

const requestToAuthWithGoogle = (): RequestToAuthWithGoogle => ({
  type: 'GOOGLE_AUTH_PROCESS',
});

const preloadAuthData = (): PreloadAuthData => ({
  type: 'PRELOAD_AUTH_DATA',
});

const breakAuthProcess = (): BreakAuthProcess => ({
  type: 'BREAK_AUTH_PROCESS',
});

const logout = (): LogoutProcess => ({
  type: 'AUTH_LOGOUT_PROCESS',
});

const passwordReset = (email: string): PasswordResetRequest => ({
  type: 'PASSWORD_RESET_PROCESS',
  payload: email,
});

const completePasswordReset = (): PasswordResetCompleted => ({
  type: 'PASSWORD_RESET_COMPLETED',
});

export {
  requestToAuth,
  requestToAuthWithGoogle,
  preloadAuthData,
  breakAuthProcess,
  logout,
  passwordReset,
  completePasswordReset,
};
