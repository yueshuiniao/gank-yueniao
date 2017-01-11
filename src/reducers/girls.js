import { FETCH_GIRLS_REQUEST ,FETCH_GIRLS_SUCCESS ,FETCH_GIRLS_FAILURE } from '../actions'

export const girls = (state = [], action) => {
    switch(action.type) {
        case FETCH_GIRLS_SUCCESS:
            return [
                ...state,
                ...action.results.map((v, k) => ({
                        url: v.url,
                        _id: v._id
                    }))
            ]
        default:
            return state;
    }
}

export const page = (state = 1, action) => {
    switch(action.type) {
        case FETCH_GIRLS_SUCCESS:
            return action.page;
        default:
            return state;
    }
}

export const isFecthing = (state = false, action) => {
    switch(action.type) {
        case FETCH_GIRLS_REQUEST:
            return true;
        default:
            return false;
    }
}
