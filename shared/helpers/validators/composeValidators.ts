const composeValidators = (validators: Array<Validator>) => (value: string): string | Validator =>
  validators.reduce((error, validator) => error || validator(value), null);

export type Validator = (value: string) => string | null;

export { composeValidators };
