import getType from './getType';

type AnObject = { [k: string]: unknown };

function matchObjects(main: AnObject, comparable: AnObject): boolean {
  return Object.keys(comparable).every((prop) => {
    if (!Object.prototype.hasOwnProperty.call(comparable, prop)) return true;

    return getType(comparable[prop]) === 'object'
      ? matchObjects(main[prop] as AnObject, comparable[prop] as AnObject)
      : main[prop] === comparable[prop];
  });
}

export default matchObjects;
