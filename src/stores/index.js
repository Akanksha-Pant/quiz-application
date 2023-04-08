import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import quiz from './quiz'
import home from './home'
const reducers = combineReducers({
  quiz,
  home,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
