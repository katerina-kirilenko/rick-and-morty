import { createSelector } from 'reselect';
import { InitialStateTypes } from 'reducer/types';

const getState = (state: InitialStateTypes): InitialStateTypes => state;

const getData = createSelector(getState, ({ data }) => {
  return data;
});

export { getState, getData };
