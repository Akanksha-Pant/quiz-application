import quizzesInstance from '../services/quiz'

const ACTION_PREFIX = 'QUIZ_ACTIONS'

const GET_QUIZZES_INIT = `${ACTION_PREFIX}/GET_QUIZZES_INIT`
const GET_QUIZZES_DONE = `${ACTION_PREFIX}/GET_QUIZZES_DONE`

const initialState = {
  quizzes: [],
  isLoading: true,
}

export function getQuizzes(data, callback) {
  return async (dispatch) => {
    dispatch({ type: GET_QUIZZES_INIT })
    const data = await quizzesInstance.getQuizzes()
    console.log(data)
    if (data.status === 200) {
      dispatch({
        type: GET_QUIZZES_DONE,
        payload: data.quizzes,
      })
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZZES_INIT:
      return { ...state, isLoading: true }
    case GET_QUIZZES_DONE:
      return { ...state, isLoading: false, quizzes: action.payload }
    default:
      return state
  }
}

export default reducer
