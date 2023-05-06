import questionInstance from '../services/quizQuestion'

const ACTION_PREFIX = 'QUESTION_ACTIONS'

const GET_QUESTIONS_INIT = `${ACTION_PREFIX}/GET_QUESTIONS_INIT`
const GET_QUESTIONS_DONE = `${ACTION_PREFIX}/GET_QUESTIONS_DONE`
const SET_QUESTION_INDEX = `${ACTION_PREFIX}/SET_QUESTION_INDEX`

const initialState = {
  isLoading: true,
  questions: [],
  currentIndex: 0,
  hasQuestionStarted: false,
}

export function getQuestions(quizId) {
  return async (dispatch) => {
    dispatch({ type: GET_QUESTIONS_INIT })
    const data = await questionInstance.getQuestions(quizId)
    console.log(data)
    if (data.status === 200) {
      dispatch({
        type: GET_QUESTIONS_DONE,
        payload: data.questions,
      })
    }
  }
}

export function setQuestionIndex(index) {
  return async (dispatch) => {
    dispatch({
      type: SET_QUESTION_INDEX,
      payload: index,
    })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_INIT:
      return { ...state, isLoading: true }
    case GET_QUESTIONS_DONE:
      return { ...state, isLoading: false, questions: action.payload }
    case SET_QUESTION_INDEX:
      return { ...state, currentIndex: action.payload }
    default:
      return state
  }
}

export default reducer
