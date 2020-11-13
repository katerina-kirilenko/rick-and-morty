import { createSelector } from 'reselect';
import { GeneralStateTypes } from 'types';
import { InitialStateLocations } from './types';

const getState = (state: GeneralStateTypes): GeneralStateTypes => state;

const getLocations = createSelector(getState, ({ locations }): InitialStateLocations => locations);

const getLocation = createSelector(getLocations, ({ isLoading, error, selectedLocation }) => ({
  isLoading,
  error,
  selectedLocation,
}));

const getPagesCount = createSelector(getLocations, ({ pagesCount }) => pagesCount);
const getCurrentPage = createSelector(getLocations, ({ currentPage }) => currentPage);

export { getLocations, getLocation, getPagesCount, getCurrentPage };
