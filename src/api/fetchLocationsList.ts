import { Location } from 'types/locations';
import { BASE_URL_API } from 'constants/paths';

const getLocations = async (): Promise<Location[]> => {
  const queryUrl = `${BASE_URL_API}/location`;
  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl},
    received ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

export default getLocations;
