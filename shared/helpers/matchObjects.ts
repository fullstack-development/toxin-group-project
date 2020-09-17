import getType from './getType';

function matchObjects(main: {}, comparable: {}): boolean {
  return Object.keys(comparable).every((prop) => {
    if (!Object.prototype.hasOwnProperty.call(comparable, prop)) return true;

    return getType(comparable[prop]) === 'object'
      ? matchObjects(main[prop], comparable[prop])
      : main[prop] === comparable[prop];
  });
}

export default matchObjects;
