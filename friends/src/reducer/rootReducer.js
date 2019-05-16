import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_FR_FAILURE,
    GET_FR_START,
    GET_FR_SUCCESS
} from '../actions/actions';

const initialState = {
    error: '',
    friends: [],
    isLoggingIn: false,
    isFetching: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                error: '',
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload,
            }
        case GET_FR_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_FR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                friends: action.payload
            }
        case GET_FR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;