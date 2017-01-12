import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { girls, page, isFecthing } from './girls'
import { isNavOpen } from './little'
import * as lists from './list'

const rootReducer = combineReducers({
    routing: routerReducer,
    isNavOpen,
    girls,
    page,
    isFecthing,
    ...lists
});

export default rootReducer;