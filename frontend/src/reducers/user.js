export const actionTypes = {
    SET_LOGIN: 'SET_LOGIN',
    SET_USER_DETAILS: 'SET_USER_DETAILS'
}

const userReducer = (state=null, action) => {
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
            
        default:
            return {
                ...state,
                userCredentials: {
                    loggedIn: false,
                    email: "",
                    sessionToken: "",
                    userDetails: {
            
                    }
                }
            }
    }
}

export default userReducer;