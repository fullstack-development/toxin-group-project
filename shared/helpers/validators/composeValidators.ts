const composeValidators = (validators: Array<Validator>) => (
  value: string | number | readonly string[],
) => validators.reduce((error, validator) => error || validator(value), null);

export type Validator = (value: string | number | readonly string[]) => string | null;

export { composeValidators };
