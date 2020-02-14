import axios from 'axios';
import {API} from '../service/api_constants';
import {fetchUserListAction} from '../actions/users';
import fetch from 'node-fetch';
global.fetch = fetch;
import Unsplash, { toJson } from "unsplash-js";

import {Access_Key, Secret_Key} from '../../config';

const unsplash = new Unsplash({

    accessKey: Access_Key,
    secret: Secret_Key
});

export const fetchUserList = data => dispatch =>
    unsplash.search.users('cho', 1)
        .then(toJson)
        .then(json => {
          let users=json.results;
          console.log({users,json});
            dispatch(fetchUserListAction(users));
            return users;
        });

