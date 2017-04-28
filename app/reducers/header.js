import { combineReducers } from 'redux'
import uuid from 'uuid';

import * as types from '../actions/header';

export default function header(state = {
    isFetching: false,
    didInvalidate: false,
    title: '',
    subtitle: '',
    icons: []
}, action) {
    switch (action.type) {

        case types.REQUEST_HEADER:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case types.RECEIVE_HEADER:
            console.log('RECEIVE_HEADER - header')
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                title: action.title,
                subtitle: action.subtitle,
                icons: action.icons,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}
