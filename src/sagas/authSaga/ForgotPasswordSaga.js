import { takeLatest, put } from 'redux-saga/effects'
import { authActions } from '@/actions'
import { authApi } from '@/api'
import { actionTypes } from '@/constants'
const { authTypes } = actionTypes;
const { ForgotPassAction, ClearNotify } = authActions;

function* ForgotPass({payload}) {
    try {
        // console.log(payload)
        const res = yield {
            status: true,
            message: 'Congratulations !!!!!', time_otp: 180
        }
        // const res = yield authApi.forgotPassword({
        //     email: payload.email
        // }, null, null, null)
        if (res.status) {
            yield put(ForgotPassAction.forgotPasswordSuccess({
                message: res.message,
                timeOtp: res.time_otp
            }))
        } else {
            throw {
                message: res.message
            }
        }
    } catch (error) {
        yield put(ForgotPassAction.forgotPasswordFailure({
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


const ForgotPassSaga = [
    takeLatest(authTypes.FORGOT_PASSWORD_REQUEST, ForgotPass),
    takeLatest(authTypes.CLEAR_NOTIFY_REQUEST, ClearNotifications),
]

export default ForgotPassSaga;