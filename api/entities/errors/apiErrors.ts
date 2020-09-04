import { boundMethod } from 'autobind-decorator';

import AuthError from './AuthError';

type ErrorConstructor = AuthError;

class ApiErrors {
  constructor() {
    this.init();
  }

  @boundMethod
  public create(key: string, value?: unknown): ErrorConstructor {
    return this[key](value);
  }

  private init(): void {
    this.add(AuthError, 'email-is-taken', (email) => `${email} already is taken. Try another`);
    this.add(AuthError, 'weak-password', () => 'The password should be 6 characters long or more');
    this.add(AuthError, 'wrong-password', () => 'The password is invalid');
    this.add(AuthError, 'user-not-found', () => 'There is no user record corresponding to this identifier');
  }

  private add(
    constructor: { new(param?: {}): ErrorConstructor },
    key: string,
    messageHandler: (value?: unknown) => string,
  ): void {
    this[key] = (value?: unknown) => new constructor({ key, message: messageHandler(value) });
  }
}

export default new ApiErrors();
