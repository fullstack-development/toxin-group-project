import queryString from 'query-string';

const getPassedFilters = (path: string) => {
  const { values } = queryString.parse(`?${path.split('?')[1]}`);
  return values && JSON.parse(values as string);
};

export default getPassedFilters;
