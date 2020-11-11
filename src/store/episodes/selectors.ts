import { createSelector } from 'reselect';
import { GeneralStateTypes } from 'types';
import { InitialStateEpisodes } from './types';

const getState = (state: GeneralStateTypes): GeneralStateTypes => state;

const getEpisodes = createSelector(getState, ({ episodes }): InitialStateEpisodes => episodes);

const getPagesCount = createSelector(getEpisodes, ({ pagesCount }) => pagesCount);
const getCurrentPage = createSelector(getEpisodes, ({ currentPage }) => currentPage);

export { getEpisodes, getPagesCount, getCurrentPage };