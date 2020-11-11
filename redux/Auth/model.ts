import { Action, ActionPayload } from 'redux/action.model';
import { User } from 'services/api/Firebase/modules/Authentication/types';

export type AuthData = {
  email: string;
  password: string;
};

export type AuthState = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  user: null | User;
  displayName: null | string;
  wasFinishedAuthChecking: boolean;
  userEmail: string;
  isPasswordResetCompleted: boolean;
  passwordResetStatusText: string;
};

export type RequestToAuth = ActionPayload<'AUTH_PROCESS', AuthData>;
export type RequestToAuthWithGoogle = Action<'GOOGLE_AUTH_PROCESS'>;
export type SetAuthRequired = Action<'AUTH_REQUIRED'>;
export type SetAuthStatusSuccess = ActionPayload<'AUTH_SUCCESS', User>;
export type SetAuthStatusFailed = ActionPayload<'AUTH_FAILED', string>;
export type BreakAuthProcess = Action<'BREAK_AUTH_PROCESS'>;
export type PreloadAuthData = Action<'PRELOAD_AUTH_DATA'>;

export type LogoutProcess = Action<'AUTH_LOGOUT_PROCESS'>;
export type LogoutDone = Action<'AUTH_LOGOUT_DONE'>;

export type PasswordResetRequest = ActionPayload<'PASSWORD_RESET_PROCESS', string>;
export type PasswordResetSuccess = ActionPayload<'PASSWORD_RESET_SUCCESS', string>;
export type PasswordResetFailed = ActionPayload<'PASSWORD_RESET_FAILED', string>;
export type PasswordResetCompleted = Action<'PASSWORD_RESET_COMPLETED'>;

export type AuthActions =
  | RequestToAuth
  | RequestToAuthWithGoogle
  | SetAuthRequired
  | SetAuthStatusSuccess
  | SetAuthStatusFailed
  | BreakAuthProcess
  | PreloadAuthData
  | LogoutDone
  | PasswordResetCompleted
  | PasswordResetFailed
  | PasswordResetRequest
  | PasswordResetSuccess;
