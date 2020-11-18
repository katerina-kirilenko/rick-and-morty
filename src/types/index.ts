import { InitialStateCharacters } from 'store/characters/types';
import { InitialStateLocations } from 'store/locations/types';
import { InitialStateEpisodes } from 'store/episodes/types';

export interface GeneralStateTypes {
  characters: InitialStateCharacters;
  locations: InitialStateLocations;
  episodes: InitialStateEpisodes;
}
