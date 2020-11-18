import { createSelector } from 'reselect';
import { GeneralStateTypes } from 'types';
import { InitialStateCharacters } from './types';

const getState = (state: GeneralStateTypes): GeneralStateTypes => state;

const getCharacters = createSelector(
  getState,
  ({ characters }): InitialStateCharacters => characters,
);

const getCharacter = createSelector(
  getCharacters,
  ({ isLoadingCharacter, errorCharacter, selectedCharacter }) => ({
    isLoadingCharacter,
    errorCharacter,
    selectedCharacter,
  }),
);

const getPagesCount = createSelector(getCharacters, ({ pagesCount }) => pagesCount);
const getCurrentPage = createSelector(getCharacters, ({ currentPage }) => currentPage);

export { getCharacters, getCharacter, getPagesCount, getCurrentPage };
