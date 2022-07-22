import { Helpers } from '@/utils'
import AuthScheme from './AuthScheme'

const authApi = {
    login: Helpers.createApi(AuthScheme.LOGIN),
    register: Helpers.createApi(AuthScheme.REGISTER),
    forgotPassword: Helpers.createApi(AuthScheme.FORGOT_PASSWORD),
    changePassword: Helpers.createApi(AuthScheme.CHANGE_PASSWORD),
    loginOtp: Helpers.createApi(AuthScheme.LOGIN_OTP),
    registerOtp: Helpers.createApi(AuthScheme.REGISTER_OTP),
    forgotPasswordOtp: Helpers.createApi(AuthScheme.FORGOT_PASSWORD_OTP),
    resendOtp: Helpers.createApi(AuthScheme.RESEND_OTP),
    logout: Helpers.createApi(AuthScheme.LOGOUT),
    validateToken: Helpers.createApi(AuthScheme.VALIDATE_TOKEN)
}

export default authApi;