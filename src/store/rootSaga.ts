import { all } from 'redux-saga/effects';
import characters from './characters/saga';
import episodes from './episodes/saga';
import locations from './locations/saga';

export default function* (): Generator {
  yield all([characters(), episodes(), locations()]);
}
