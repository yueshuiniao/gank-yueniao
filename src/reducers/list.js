import { combineReducers } from 'redux'

import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from '../actions'

const createList = (tab) => {
    const list = (state = [], action) => {
        if(tab !== action.tab) return state;
        switch(action.type) {
            case FETCH_LIST_SUCCESS:
                return [
                    ...state,
                    ...action.results.map((v, k) => ({
                            url: v.url,
                            _id: v._id,
                            type: v.type,
                            desc: v.desc,
                            who: v.who
                        }))
                ]
            default:
                return state;
        }
    }

    const page = (state = 1, action) => {
        if(tab !== action.tab) return state;
        switch(action.type) {
            case FETCH_LIST_SUCCESS:
                return action.page;
            default:
                return state;
        }
    }

    const isFecthing = (state = false, action) => {
        if(tab !== action.tab) return state;
        switch(action.type) {
            case FETCH_LIST_REQUEST:
                return true;
            default:
                return false;
        }
    }

    return combineReducers({
        list,
        page,
        isFecthing
    })
}

export const front = createList('\u524d\u7aef');
