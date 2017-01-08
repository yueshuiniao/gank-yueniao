import { combineReducers } from 'redux';
import { girls, page } from './girls';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    girls,
    page,
    routing: routerReducer
});

export default rootReducer;