import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '@/actions'

export const useAuth = () => {
    const dispatch = useDispatch()
    const LoginState = useSelector(state => state.Login)
    const RegisterState = useSelector(state => state.Register)
    const ForgotState = useSelector(state => state.forgot)
    const OtpState = useSelector(state => state.otp)
    const ChangePasswordState = useSelector(state => state.changePassword)
    const AuthenStore = useSelector(state => state.authenStore)

    const handleLogin = ({ email, password }) => {
        dispatch(authActions.LoginAction.LoginRequest({ email, password }))
    }
    const handleRegister = ({ fullName, email, password, phone, introCode }) => {
        dispatch(authActions.RegisterAction.RegisterRequest({ fullName, email, password, phone, introCode }))
    }
    const handleForgot = ({ email }) => {
        dispatch(authActions.ForgotPassAction.forgotPasswordRequest({ email }))
    }
    const handleChangePassword = ({ password }) => {
        dispatch(authActions.ChangePassAction.ChangePassRequest({ password }))
    }
    const handleNotify = () => {
        dispatch(authActions.ClearNotify.NotifyRequest())
    }
    const handleValidateToken = ({ token }) => {
        dispatch(authActions.ValidateTokenAction.ValidateTokenRequest({ token }))
    }
    const handleSignOut = () => {
        dispatch(authActions.LogoutAction.LogoutRequest())
    }
    const handleOtp = (payload) => {
        dispatch(authActions.OtpAction.otpRequest(payload))
    }

    return {
        ForgotState,
        RegisterState,
        LoginState,
        ChangePasswordState,
        OtpState, AuthenStore,
        handleLogin,
        handleRegister,
        handleForgot,
        handleChangePassword,
        handleNotify,
        handleValidateToken,
        handleSignOut,
        handleOtp,
    }
}