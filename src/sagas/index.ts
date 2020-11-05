import { takeEvery, call, put } from 'redux-saga/effects';
import { CHARACTERS_DATA_REQUEST } from 'constants/actions';
import { fetchDataCharactersResponse, fetchDataCharactersFailed } from 'actions/actions';
import getCharacters from 'api/fetchCharactersList';

function* getDataCharacters() {
  try {
    const dataCharacters = yield call(getCharacters);

    yield put(fetchDataCharactersResponse(dataCharacters));
  } catch (error) {
    console.log('function*getDataCharacters -> error'); //
    yield put(fetchDataCharactersFailed(`Something went wrong ${error}`));
  }
}

export default function* (): Generator {
  yield takeEvery(CHARACTERS_DATA_REQUEST, getDataCharacters);
}
