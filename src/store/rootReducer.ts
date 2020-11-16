import { combineReducers } from 'redux';
import characters from './characters/reducer';
import episodes from './episodes/reducer';

export default combineReducers({
  characters,
  episodes,
});
