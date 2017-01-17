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
                            who: v.who,
                            publishedAt: v.publishedAt
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


// const createDayList = () => {
//     const list = (state = [], action) => {
//         switch(action.type) {
//             case FETCH_LIST_SUCCESS:
//                 return [
//                     ...state,
//                     ...action.results
//                 ]
//             default:
//                 return state;
//         }
//     }

//     const date = (state = '2017/01/01', action) => {
//         switch(action.type) {
//             case FETCH_LIST_SUCCESS:
//                 return action.date;
//             default:
//                 return state;
//         }
//     }

//     const isFecthing = (state = false, action) => {
//         switch(action.type) {
//             case FETCH_LIST_REQUEST:
//                 return true;
//             default:
//                 return false;
//         }
//     }

//     return combineReducers({
//         list,
//         date,
//         isFecthing
//     })
// }



export const front = createList('前端');
export const girls = createList('福利');
export const Android = createList('Android');
export const iOS = createList('iOS');
export const other = createList('拓展资源');
export const App = createList('App');
export const all = createList('all');