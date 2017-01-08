import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const configureStore = (initialState = {}) => {
    const store = createStore(rootReducer, initialState, enhancers);
    return store;
}

export default configureStore;