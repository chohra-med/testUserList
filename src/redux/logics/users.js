import axios from 'axios';
import {API} from '../service/api_constants';
import {fetchUserListAction} from '../actions/users';

export const fetchUserList = data => dispatch =>
  axios.get(API()).then(res => {
    dispatch(fetchUserListAction(res.data));
    return res.data;
  });
