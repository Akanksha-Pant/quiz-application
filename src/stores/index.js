import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import quiz from './quiz'
const reducers = combineReducers({
    quiz
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;