import { boundMethod } from 'autobind-decorator';

import ApartmentsError from './ApartmentsError';
import AuthError from './AuthError';
import DatabaseError from './DatabaseError';

type ErrorConstructor = ApartmentsError | AuthError | DatabaseError;

class ApiErrors {
  private list: { [k: string]: (...rest: unknown[]) => ErrorConstructor };

  constructor() {
    this.list = {};
    this.init();
  }

  @boundMethod
  public trigger(key: string, ...rest: unknown[]): ErrorConstructor {
    return this.list[key](...rest);
  }

  private init(): void {
    this.add(AuthError, 'auth/email-is-taken', (email) => `${email} already is taken. Try another`);
    this.add(
      AuthError,
      'auth/weak-password',
      () => 'The password should be 6 characters long or more',
    );
    this.add(AuthError, 'auth/wrong-password', () => 'The password is invalid');
    this.add(
      AuthError,
      'auth/user-not-found',
      () => 'There is no user record corresponding to this identifier',
    );

    this.add(
      ApartmentsError,
      'apartments/nothing-found',
      (path) => `Unfortunately nothing found at the path: '${path}'`,
    );
    this.add(DatabaseError, 'database/complete-clean-up', () => 'Trying to clean up the database');
  }

  private add(
    constructor: { new (param?: {}): ErrorConstructor },
    key: string,
    handler: (...rest: unknown[]) => string,
  ): void {
    this.list[key] = (...rest: unknown[]) => new constructor({ key, message: handler(...rest) });
  }
}

export default new ApiErrors();
