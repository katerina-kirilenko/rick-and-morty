import { Character } from 'types/characters';
import { BASE_URL_API } from 'constants/paths';

const getCharacters = async (): Promise<Character[]> => {
  const queryUrl = `${BASE_URL_API}/character`;
  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl},
    received ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

export default getCharacters;
