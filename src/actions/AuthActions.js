import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from '@/constants';
const {authTypes} = actionTypes;

export const LoginAction = {
    LoginRequest: createAction(authTypes.LOGIN_REQUEST),
    LoginSuccess: createAction(authTypes.LOGIN_SUCCESS),
    LoginFailure: createAction(authTypes.LOGIN_FAILURE),
}

export const RegisterAction = {
    RegisterRequest: createAction(authTypes.REGISTER_REQUEST),
    RegisterSuccess: createAction(authTypes.REGISTER_SUCCESS),
    RegisterFailure: createAction(authTypes.REGISTER_FAILURE)
}

export const ForgotPassAction = {
    forgotPasswordRequest: createAction(authTypes.FORGOT_PASSWORD_REQUEST),
    forgotPasswordSuccess: createAction(authTypes.FORGOT_PASSWORD_SUCCESS),
    forgotPasswordFailure: createAction(authTypes.FORGOT_PASSWORD_FAILURE)
}

export const ChangePassAction = {
    ChangePassRequest: createAction(authTypes.CHANGE_PASSWORD_REQUEST),
    ChangePassSuccess: createAction(authTypes.CHANGE_PASSWORD_SUCCESS),
    ChangePassFailure: createAction(authTypes.CHANGE_PASSWORD_FAILURE)
}

export const ClearNotify = {
    NotifyRequest: createAction(authTypes.CLEAR_NOTIFY_REQUEST),
    NotifySuccess: createAction(authTypes.CLEAR_NOTIFY_SUCCESS),
    NotifyFailure: createAction(authTypes.CLEAR_NOTIFY_FAILURE)
}

export const OtpAction = {
    otpRequest: createAction(authTypes.OTP_REQUEST),
    otpSuccess: createAction(authTypes.OTP_SUCCESS),
    otpFailure: createAction(authTypes.OTP_FAILURE),
}

export const ResendOtpAction = {
    ResendOtpRequest: createAction(authTypes.RESEND_OTP_REQUEST),
    ResendOtpSuccess: createAction(authTypes.RESEND_OTP_SUCCESS),
    ResendOtpFailure: createAction(authTypes.RESEND_OTP_FAILURE),
}

export const ValidateTokenAction = {
    ValidateTokenRequest: createAction(authTypes.VALIDATE_TOKEN_REQUEST),
    ValidateTokenSuccess: createAction(authTypes.VALIDATE_TOKEN_SUCCESS),
    ValidateTokenFailure: createAction(authTypes.VALIDATE_TOKEN_FAILURE)
}

export const LogoutAction = {
    LogoutRequest: createAction(authTypes.LOGOUT_REQUEST),
    LogoutSuccess: createAction(authTypes.LOGOUT_SUCCESS),
    LogoutFailure: createAction(authTypes.LOGOUT_FAILURE)
}