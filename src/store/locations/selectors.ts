import { createSelector } from 'reselect';
import { GeneralStateTypes } from 'types';
import { InitialStateLocations } from './types';

const getState = (state: GeneralStateTypes): GeneralStateTypes => state;

const getLocations = createSelector(getState, ({ locations }): InitialStateLocations => locations);

const getLocation = createSelector(
  getLocations,
  ({ isLoadingLocation, errorLocation, selectedLocation }) => ({
    isLoadingLocation,
    errorLocation,
    selectedLocation,
  }),
);

const getPagesCount = createSelector(getLocations, ({ pagesCount }) => pagesCount);
const getCurrentPage = createSelector(getLocations, ({ currentPage }) => currentPage);

export { getLocations, getLocation, getPagesCount, getCurrentPage };
