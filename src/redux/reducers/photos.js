


import _ from 'lodash';
import initialState from '../initialState';
import {GET_PHOTOS} from '../actionTypes';

export default (state = initialState.photos, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
};
