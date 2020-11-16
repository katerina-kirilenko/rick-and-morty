import { call, put, select, takeLatest } from 'redux-saga/effects';
import getCharacters from 'api/fetchCharactersList';
import getCharacter from 'api/fetchCharacter';
import { getCurrentPage } from 'store/characters';
import { CHARACTERS_DATA_REQUEST, CHARACTER_REQUEST } from 'constants/actions';
import {
  fetchDataCharactersResponse,
  fetchDataCharactersFailed,
  setPagesCount,
  fetchCharacterResponse,
  fetchCharacterFailed,
} from './actions';
import { CharacterPropsSaga } from './types';

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

function* getDataCharacter({ payload }: CharacterPropsSaga) {
  try {
    const results = yield call(getCharacter, payload);
    yield put(fetchCharacterResponse(results));
  } catch (error) {
    yield put(fetchCharacterFailed(`Something went wrong ${error}`));
  }
}

export default function* (): Generator {
  yield takeLatest(CHARACTERS_DATA_REQUEST, getDataCharacters);
  yield takeLatest(CHARACTER_REQUEST, getDataCharacter);
}
