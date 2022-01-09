export const actionTypes = {
    SET_LOGIN: 'SET_LOGIN',
    SET_USER_DETAILS: 'SET_USER_DETAILS',
    SET_LOGOUT: 'SET_LOGOUT'
}

const INITIAL_STATE = {
    userCredentials: {
        loggedIn: false,
        email: "",
        sessionToken: "",
        userDetails: {

        }
    }
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_LOGIN:
            console.log(action, " __ ");
            return {
                ...state,
                userCredentials: {
                    loggedIn: true,
                    email: action.email,
                    sessionToken: action.sessionToken,
                    userDetails: action.userData
                }
            }

        case actionTypes.SET_LOGOUT:
            console.log(action, " __ ");
            return {
                userCredentials: {
                    loggedIn: false,
                    email: "",
                    sessionToken: "",
                    userDetails: {

                    }
                }
            }

        default:
            return state
    }
}

export default userReducer;