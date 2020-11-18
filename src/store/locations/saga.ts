import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATIONS_DATA_REQUEST, LOCATION_REQUEST } from 'constants/actions';
import getLocations from 'api/fetchLocationsList';
import getLocation from 'api/fetchLocation';
import { getCurrentPage } from 'store/locations';
import {
  fetchDataLocationsResponse,
  fetchDataLocationsFailed,
  setPagesCount,
  fetchLocationResponse,
  fetchLocationFailed,
} from './actions';
import { LocationPropsSaga } from './types';

function* getDataEpisodes() {
  try {
    const currentPage = yield select(getCurrentPage);
    const { info, results } = yield call(getLocations, currentPage + 1);

    yield put(fetchDataLocationsResponse(results));
    yield put(setPagesCount(info.pages));
  } catch (error) {
    yield put(fetchDataLocationsFailed(`Something went wrong ${error}`));
  }
}

function* getDataEpisode({ payload }: LocationPropsSaga) {
  try {
    const results = yield call(getLocation, payload);
    yield put(fetchLocationResponse(results));
  } catch (error) {
    yield put(fetchLocationFailed(`Something went wrong ${error}`));
  }
}

export default function* (): Generator {
  yield takeLatest(LOCATIONS_DATA_REQUEST, getDataEpisodes);
  yield takeLatest(LOCATION_REQUEST, getDataEpisode);
}
