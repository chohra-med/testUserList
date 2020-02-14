import {combineReducers} from 'redux';

import users from './reducers/users';
import photos from './reducers/photos';

export default combineReducers({
  users,
  photos
});
