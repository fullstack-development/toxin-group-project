import getType from './getType';

function isObject(value: unknown): value is { [k: string]: unknown } {
  return getType(value) === 'object';
}

export default isObject;
