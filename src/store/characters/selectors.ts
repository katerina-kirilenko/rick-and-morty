import { createSelector } from 'reselect';
import { GeneralStateTypes } from 'types';
import { InitialStateCharacters } from './types';

const getState = (state: GeneralStateTypes): GeneralStateTypes => state;

const getCharacters = createSelector(
  getState,
  ({ characters }): InitialStateCharacters => characters,
);

export { getCharacters };
