import { combineReducers } from 'redux';
import characters from './characters/reducer';
import episodes from './episodes/reducer';
import locations from './locations/reducer';

export default combineReducers({
  characters,
  episodes,
  locations,
});
