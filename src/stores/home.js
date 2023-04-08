import authInstance from '../services/authetication'

const ACTION_PREFIX = 'HOME_ACTION';

const INIT_GET_USER = `${ACTION_PREFIX}/INIT_GET_USER`;
const GET_USER_DONE = `${ACTION_PREFIX}/INIT_GET_DONE`;
const TOGGLE_SIGN_UP_MODAL = `${ACTION_PREFIX}/TOGGLE_SIGN_UP_MODAL`;

const initialState = {
  isSignUpModalOpen: false,
  isUserLoading: true,
  currentUser: null,
}

export function toggleSignUpModal () {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_SIGN_UP_MODAL});
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
      return {...state, isSignUpModalOpen: !state.isSignUpModalOpen};
    default:
      return state
  }
}

export default reducer
