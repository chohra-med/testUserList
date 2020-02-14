import fetch from 'node-fetch';
global.fetch = fetch;
import Unsplash, { toJson } from "unsplash-js";

import {Access_Key, Secret_Key} from '../../config';
import {fetchPhotosListAction} from '../actions/photos';

const unsplash = new Unsplash({
    accessKey: Access_Key,
    secret: Secret_Key
});

export const fetchUserList = data => dispatch =>
    unsplash.users.photos(data, 1, 10, "popular", false)
        .then(toJson)
        .then(json => {
            let photos=json.results;
            dispatch(fetchPhotosListAction(photos));
            return photos;
        });

