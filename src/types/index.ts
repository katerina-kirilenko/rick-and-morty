import { InitialStateCharacters } from 'store/characters/types';
import { InitialStateEpisodes } from 'store/episodes/types';

export interface GeneralStateTypes {
  characters: InitialStateCharacters;
  locations: null;
  episodes: InitialStateEpisodes;
}
