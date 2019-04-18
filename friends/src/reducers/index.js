import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS  
} from "../actions";

const initialState = {
    friends: [],
    isLoggingIn: false,
    fetchingFriends: false,
    error: null
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false
            };
        }
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                fetchingFriends: true
            };
        case FETCH_DATA_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                error: '',
                fetchingFriends: false,
                friends: action.payload
            };
        default:
            return state;
    }
}

export default reducer;