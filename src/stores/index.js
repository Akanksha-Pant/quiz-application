import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import quiz from './quiz'
import home from './home'
import questions from './question'

const reducers = combineReducers({
  quiz,
  home,
  questions,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
