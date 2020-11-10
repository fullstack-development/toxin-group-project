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

export const requestToAuth = (data: AuthData): RequestToAuth => ({
  type: 'AUTH_PROCESS',
  payload: data,
});

export const requestToAuthWithGoogle = (): RequestToAuthWithGoogle => ({
  type: 'GOOGLE_AUTH_PROCESS',
});

export const preloadAuthData = (): PreloadAuthData => ({
  type: 'PRELOAD_AUTH_DATA',
});

export const breakAuthProcess = (): BreakAuthProcess => ({
  type: 'BREAK_AUTH_PROCESS',
});

export const logout = (): LogoutProcess => ({
  type: 'AUTH_LOGOUT_PROCESS',
});

export const passwordReset = (email: string): PasswordResetRequest => ({
  type: 'PASSWORD_RESET_PROCESS',
  payload: email,
});

export const completionPasswordReset = (): PasswordResetCompleted => ({
  type: 'PASSWORD_RESET_COMPLETED',
});
