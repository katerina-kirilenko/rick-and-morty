import { takeEvery, call, put, select } from 'redux-saga/effects';
import { EPISODES_DATA_REQUEST } from 'constants/actions';
import { getCurrentPage } from 'store/characters';
import { fetchDataEpisodesResponse, fetchDataEpisodesFailed, setPagesCount } from './actions';
import getEpisodes from 'api/fetchEpisodesList';

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

export default function* (): Generator {
  yield takeEvery(EPISODES_DATA_REQUEST, getDataEpisodes);
}
