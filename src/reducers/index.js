import { combineReducers } from 'redux';
import { girls, page, isFecthing } from './girls';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    girls,
    page,
    isFecthing,
    routing: routerReducer
});

export default rootReducer;