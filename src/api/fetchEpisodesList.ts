import { Episode } from 'types/episodes';
import { BASE_URL_API } from 'constants/paths';

const getEpisodes = async (currentPage: number): Promise<Episode[]> => {
  const queryUrl = `${BASE_URL_API}/episode/?page=${currentPage}`;
  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl},
    received ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export default getEpisodes;
