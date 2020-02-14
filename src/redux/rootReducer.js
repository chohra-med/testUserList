import { combineReducers } from 'redux';

import auth from './reducers/auth';
import config from './reducers/config';
import properties from './reducers/properties';
import specificProperties from './reducers/specificProperties';
import wall from './reducers/wall';

export default combineReducers({
  auth,
  config,
  properties,
  specificProperties,
  wall,
});
