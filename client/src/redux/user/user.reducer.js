import userActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
        case userActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userActionTypes.GOOGLE_SIGNIN_FAILURE:
        case userActionTypes.SIGNIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userActionTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                error : action.payload
            }
        default:
            return state;
    }
}
export default userReducer;