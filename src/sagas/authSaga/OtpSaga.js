import { takeLatest, put } from 'redux-saga/effects'
import { authActions } from '@/actions'
import { authApi } from '@/api'
import { actionTypes } from '@/constants'
import * as utils from '@/utils';
const { getStore } = utils.Storage
const { authTypes } = actionTypes;
const { OtpAction, ClearNotify } = authActions;

function* Otp({ payload }) {
    try {
        const screen = yield getStore("Screen")
        const email = yield getStore("Email")
        // const otp = ['1', '2', '3', '4', '5', '6']
        // const res = yield {
        //     status: 'success',
        //     message: 'Đúng mã OTP',
        // }
        let res;
        if (screen) {
            let OTP = Object.values(payload)
            switch (screen) {
                case "Login":
                    res = yield authApi.loginOtp({
                        email: email, otp: OTP
                    })
                    break;
                case "Register":
                    res = yield authApi.registerOtp({
                        email: email, otp: OTP
                    })
                    break;
                case "ForgotPassword":
                    res = yield authApi.forgotPasswordOtp({
                        email: email, otp: OTP
                    })
                    break;
                default:
                    break;
            }
        } else {
            res = yield authApi.resendOtp({
                email: email
            })
        }
        if (res.status) {
            if (res.resend) {
                yield put(OtpAction.otpSuccess({
                    message: res.message,
                    resend: res.resend
                }))
            } else {
                yield put(OtpAction.otpSuccess({
                    message: res.message,
                }))
            }
        } else {
            throw {
                message: "Sai mã OTP"
            }
        }
    } catch (error) {
        yield put(OtpAction.otpFailure({
            message: error.message,
        }))
    }
}

function* ClearNotifications() {
    try {
        yield put(ClearNotify.NotifySuccess())
    } catch (error) {
        yield put(ClearNotify.NotifyFailure({
            message: error.message,
        }))
    }
}
const OtpSaga = [
    takeLatest(authTypes.OTP_REQUEST, Otp),
    takeLatest(authTypes.CLEAR_NOTIFY_REQUEST, ClearNotifications),
]

export default OtpSaga;