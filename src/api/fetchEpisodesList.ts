import { Episode } from 'types/episodes';
import { BASE_URL_API } from 'constants/paths';

const getEpisodes = async (): Promise<Episode[]> => {
  const queryUrl = `${BASE_URL_API}/episode`;
  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl},
    received ${response.status}`);
  }

  const data = await response.json();
  console.log('data', data);
  return data.results;
};

export default getEpisodes;
