import quizzesInstance from '../services/quiz'
import responseInstance from '../services/quizResponse'

const ACTION_PREFIX = 'QUIZ_ACTIONS'

const GET_QUIZZES_INIT = `${ACTION_PREFIX}/GET_QUIZZES_INIT`
const GET_MY_QUIZZES_INIT = `${ACTION_PREFIX}/GET_MY_QUIZZES_INIT`
const GET_QUIZZES_DONE = `${ACTION_PREFIX}/GET_QUIZZES_DONE`
const GET_MY_QUIZZES_DONE = `${ACTION_PREFIX}/GET_MY_QUIZZES_DONE`
const SET_CURRENT_QUIZ = `${ACTION_PREFIX}/SET_CURRENT_QUIZ`
const ALTER_QUIZ_RESPONSE = `${ACTION_PREFIX}/ALTER_QUIZ_RESPONSE`
const SET_QUIZ_AND_RESPONSE_INIT = `${ACTION_PREFIX}/SET_QUIZ_AND_RESPONSE_INIT`
const SET_QUIZ_AND_RESPONSE_DONE = `${ACTION_PREFIX}/ET_QUIZ_AND_RESPONSE_DONE`
const TOGGLE_QUIZ_TIMER = `${ACTION_PREFIX}/TOGGLE_QUIZ_TIMER`

const initialState = {
  quizzes: [],
  myQuizzes: [],
  myQuizzesLoading: true,
  isLoading: true,
  currentQuiz: {},
  quizResponse: {},
  previousResponse: {},
  isQuizResponseLoading: false,
  hasQuizTimerStarted: false,
}

export function getQuizzes() {
  return async (dispatch) => {
    dispatch({ type: GET_QUIZZES_INIT })
    const data = await quizzesInstance.getQuizzes()
    if (data.status === 200) {
      dispatch({
        type: GET_QUIZZES_DONE,
        payload: data.quizzes,
      })
    }
  }
}

export function getMyQuizzes() {
  return async (dispatch) => {
    dispatch({ type: GET_MY_QUIZZES_INIT })
    const data = await quizzesInstance.getQuizzes(true)
    if (data.status === 200) {
      dispatch({
        type: GET_MY_QUIZZES_DONE,
        payload: data.quizzes,
      })
    }
  }
}

export function setCurrentQuiz(quiz) {
  return async (dispatch) => {
    dispatch({
      type: SET_CURRENT_QUIZ,
      payload: quiz,
    })
  }
}

export function alterQuizResponse(question, value) {
  return (dispatch) => {
    dispatch({
      type: ALTER_QUIZ_RESPONSE,
      payload: { name: question, value },
    })
  }
}

export function setQuizAndResponse(quizId) {
  return async (dispatch) => {
    dispatch({ type: SET_QUIZ_AND_RESPONSE_INIT })
    const quizData = await quizzesInstance.getQuiz(quizId)
    const responseData = await responseInstance.getResponse(quizId)
    if (responseData.status === 200) {
      dispatch({
        type: SET_QUIZ_AND_RESPONSE_DONE,
        payload: {
          previousResponse: responseData.response,
          quiz: quizData.quiz,
        },
      })
    }
  }
}

export function toggleQuizTimer() {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_QUIZ_TIMER })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZZES_INIT:
      return { ...state, isLoading: true }
    case GET_QUIZZES_DONE:
      return { ...state, isLoading: false, quizzes: action.payload }
    case GET_MY_QUIZZES_INIT:
      return { ...state, myQuizzesLoading: true }
    case GET_MY_QUIZZES_DONE:
      return { ...state, myQuizzesLoading: false, myQuizzes: action.payload }
    case SET_CURRENT_QUIZ:
      return { ...state, currentQuiz: action.payload }
    case ALTER_QUIZ_RESPONSE:
      return {
        ...state,
        quizResponse: {
          ...state.quizResponse,
          [action.payload.name]: action.payload.value,
        },
        isPreviousResponseLoading: true,
      }
    case SET_QUIZ_AND_RESPONSE_INIT:
      return { ...state, isQuizResponseLoading: true }
    case SET_QUIZ_AND_RESPONSE_DONE:
      return {
        ...state,
        isQuizResponseLoading: false,
        currentQuiz: action.payload.quiz,
        previousResponse: action.payload.previousResponse,
      }
    case TOGGLE_QUIZ_TIMER:
      return {
        ...state,
        hasQuizTimerStarted: !state.hasQuizTimerStarted,
      }
    default:
      return state
  }
}

export default reducer
