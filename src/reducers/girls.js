import { FETCH_TODOS_REQUEST ,FETCH_TODOS_SUCCESS ,FETCH_TODOS_FAILURE } from '../actions'
console.log(FETCH_TODOS_SUCCESS)
const girls = (state = [], action) => {
    console.log(action.results, action.page)
    switch(action.type) {
        case FETCH_TODOS_SUCCESS:
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

const page = (state = [], action) => {
    switch(action.type) {
        case FETCH_TODOS_SUCCESS:
            return action.page;
        default:
            return state;
    }
}

export { girls, page };