import { isObject } from './isObject';

function matchObjects<T extends { [k: string]: unknown }>(main: T, comparable: T): boolean {
  return Object.keys(comparable).every((prop) => {
    if (!Object.prototype.hasOwnProperty.call(comparable, prop)) return true;

    const mainValue = main[prop];
    const comparableValue = comparable[prop];

    if (isObject(mainValue) && isObject(comparableValue)) {
      return matchObjects(mainValue, comparableValue);
    }

    return mainValue === comparableValue;
  });
}

export { matchObjects };
