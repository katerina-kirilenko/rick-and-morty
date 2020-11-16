import queryString from 'query-string';
import { Character } from 'types/characters';
import { BASE_URL_API, CHARACTER } from 'constants/paths';

const getCharacters = async (currentPage: number): Promise<Character[]> => {
  const queryOptions = {
    url: BASE_URL_API + CHARACTER,
    query: {
      page: currentPage,
    },
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

export default getCharacters;
