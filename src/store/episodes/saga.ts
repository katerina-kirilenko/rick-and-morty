import { call, put, select, takeLatest } from 'redux-saga/effects';
import { EPISODES_DATA_REQUEST, EPISODE_REQUEST } from 'constants/actions';
import getEpisodes from 'api/fetchEpisodesList';
import getEpisode from 'api/fetchEpisode';
import { getCurrentPage } from 'store/episodes';
import {
  fetchDataEpisodesResponse,
  fetchDataEpisodesFailed,
  setPagesCount,
  fetchEpisodeResponse,
  fetchEpisodeFailed,
} from './actions';
import { EpisodePropsSaga } from './types';

function* getDataEpisodes() {
  try {
    const currentPage = yield select(getCurrentPage);
    const { info, results } = yield call(getEpisodes, currentPage + 1);

    yield put(fetchDataEpisodesResponse(results));
    yield put(setPagesCount(info.pages));
  } catch (error) {
    yield put(fetchDataEpisodesFailed(`Something went wrong ${error}`));
  }
}

function* getDataEpisode({ payload }: EpisodePropsSaga) {
  try {
    const results = yield call(getEpisode, payload);
    yield put(fetchEpisodeResponse(results));
  } catch (error) {
    yield put(fetchEpisodeFailed(`Something went wrong ${error}`));
  }
}

export default function* (): Generator {
  yield takeLatest(EPISODES_DATA_REQUEST, getDataEpisodes);
  yield takeLatest(EPISODE_REQUEST, getDataEpisode);
}
