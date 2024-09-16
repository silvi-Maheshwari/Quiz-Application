import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESSFULL } from "./Action"
const initialData = {
    isLoading: false,
    isError: false,
    token: null
}
const LoginReducer = (state=initialData, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESSFULL:
            return {
                ...state,
                token: action.payload.token,
                isLoading: false,
                isError: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                token: null,
                isLoading: false,
                isError: action.payload
            }
        default:
            return state;
    }
}
export default LoginReducer;