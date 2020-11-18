import queryString from 'query-string';
import { Location } from 'types/locations';
import { BASE_URL_API, LOCATION } from 'constants/paths';

const getEpisode = async (id: string): Promise<Location> => {
  const queryOptions = {
    url: BASE_URL_API + LOCATION + id,
    query: {},
  };

  const queryUrl = queryString.stringifyUrl(queryOptions);
  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl},
    received ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export default getEpisode;
