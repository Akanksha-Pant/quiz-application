import authInstance from '../services/authetication'

const ACTION_PREFIX = 'HOME_ACTION'

const INIT_GET_USER = `${ACTION_PREFIX}/INIT_GET_USER`
const GET_USER_DONE = `${ACTION_PREFIX}/INIT_GET_DONE`
const TOGGLE_SIGN_UP_MODAL = `${ACTION_PREFIX}/TOGGLE_SIGN_UP_MODAL`
const TOGGLE_QUESTION_MODAL = `${ACTION_PREFIX}/TOGGLE_QUESTION_MODAL`
const TOGGLE_QUIZ_MODAL = `${ACTION_PREFIX}/TOGGLE_QUIZ_MODAL`

const initialState = {
  isSignUpModalOpen: false,
  isQuestionsModalOpen: false,
  isUserLoading: true,
  currentUser: null,
  isQuizModalOpen: false,
}

export function toggleSignUpModal() {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_SIGN_UP_MODAL })
  }
}

export function getUser(data) {
  return async (dispatch) => {
    dispatch({ type: INIT_GET_USER })
    const user = await authInstance.getCurrentUser()
    console.log(user)
    dispatch({
      type: GET_USER_DONE,
      payload: user,
    })
  }
}

export function toggleQuestionModal() {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_QUESTION_MODAL })
  }
}

export function toggleQuizModal() {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_QUIZ_MODAL })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GET_USER:
      return { ...state, isUserLoading: true }
    case GET_USER_DONE:
      return {
        ...state,
        isUserLoading: false,
        currentUser: action.payload,
      }
    case TOGGLE_SIGN_UP_MODAL:
      return { ...state, isSignUpModalOpen: !state.isSignUpModalOpen }
    case TOGGLE_QUESTION_MODAL:
      return { ...state, isQuestionsModalOpen: !state.isQuestionsModalOpen }
    case TOGGLE_QUIZ_MODAL:
      return { ...state, isQuizModalOpen: !state.isQuizModalOpen }
    default:
      return state
  }
}

export default reducer
