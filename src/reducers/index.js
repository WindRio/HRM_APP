import { combineReducers } from 'redux'
import * as authReducer from './authReducers'
// import * as  authReducer from './authReducers'
const {ForgotReducer, RegisterReducer, LoginReducer, ChangePassReducer,OtpReducer} = authReducer


export default combineReducers({
    forgot: ForgotReducer,
    Register: RegisterReducer,
    Login: LoginReducer,
    changePassword: ChangePassReducer,
    otp: OtpReducer,
})