import {GET_PHOTOS} from '../actionTypes';

export const fetchPhotosListAction = payload => ({
    type: GET_PHOTOS,
    payload,
});
