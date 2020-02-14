import axios from 'axios';
import {API} from '../service/api_constants';
import {fetchUserListAction} from '../actions/users';
import {users} from '../../dataTest';

export const fetchUserList = data => dispatch =>
    dispatch(fetchUserListAction(users));
// axios.get(API()).then(res => {
//   dispatch(fetchUserListAction(res.data));
//   return res.data;
// });


