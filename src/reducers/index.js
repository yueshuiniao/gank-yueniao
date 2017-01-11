import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { girls, page, isFecthing } from './girls'
import { isNavOpen } from './little'

const rootReducer = combineReducers({
    routing: routerReducer,
    girls,
    page,
    isFecthing,
    isNavOpen
});

export default rootReducer;