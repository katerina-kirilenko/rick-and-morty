import { takeEvery, call, put, select } from 'redux-saga/effects';
import { CHARACTERS_DATA_REQUEST } from 'constants/actions';
import { getCurrentPage } from 'store/characters';
import { fetchDataCharactersResponse, fetchDataCharactersFailed, setPagesCount } from './actions';
import getCharacters from 'api/fetchCharactersList';

function* getDataCharacters() {
  try {
    const currentPage = yield select(getCurrentPage);
    const { info, results } = yield call(getCharacters, currentPage + 1);

    yield put(fetchDataCharactersResponse(results));
    yield put(setPagesCount(info.pages));
  } catch (error) {
    yield put(fetchDataCharactersFailed(`Something went wrong ${error}`));
  }
}

export default function* (): Generator {
  yield takeEvery(CHARACTERS_DATA_REQUEST, getDataCharacters);
}
