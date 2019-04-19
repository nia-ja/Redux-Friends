import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE
} from "../actions";

const initialState = {
    friends: [],
    isLoggingIn: false,
    fetchingFriends: false,
    savingFriends: false,
    error: null,
    credentials: []
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
                isLoggingIn: false,
                credentials: action.credentials
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
            return {
                ...state,
                error: '',
                fetchingFriends: false,
                friends: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false
            };
        case ADD_FRIEND_START:
            return {
                ...state,
                error: '',
                savingFriends: true,
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                savingFriends: false,
                friends: action.payload
            };
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload,
                savingFriends: false
            };
        default:
            return state;
    }
}

export default reducer;