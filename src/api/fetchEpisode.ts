import queryString from 'query-string';
import { Episode } from 'types/episodes';
import { BASE_URL_API, EPISODE } from 'constants/paths';

const getEpisode = async (id: string): Promise<Episode> => {
  const queryOptions = {
    url: BASE_URL_API + EPISODE + id,
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
