import { all } from 'redux-saga/effects';
import characters from './characters/saga';
import episodes from './episodes/saga';

export default function* (): Generator {
  yield all([characters(), episodes()]);
}
