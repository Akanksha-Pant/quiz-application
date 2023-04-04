const ACTION_PREFIX = 'QUESTION_ACTIONS';

const GET_QUESTIONS_INIT = `${ACTION_PREFIX}/GET_QUESTIONS_INIT`;
const GET_QUESTIONS_DONE = `${ACTION_PREFIX}/GET_QUESTIONS_DONE`;

const initialState = {
    isLoading: false,
    questions: []
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_QUESTIONS_INIT:
            return {...state, isLoading: true};
        case GET_QUESTIONS_DONE:
            return {...state, isLoading: false, questions: action.payload};
        default:
            return state;
    }
}

export default reducer;