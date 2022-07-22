import { takeLatest, put } from 'redux-saga/effects'
import { authActions } from '@/actions'
import { authApi } from '@/api'
import { actionTypes } from '@/constants'
import * as utils from '@/utils';
const { authTypes } = actionTypes;
const { RegisterAction, ClearNotify } = authActions;
const { setStore } = utils.Storage;

function* Register({ payload }) {
    try {
        // const res = yield {
        //     notifyType: 'success',
        //     message: 'Moi vao mail lay ma OTP'
        // }
        const res = yield authApi.register(payload, null, null, null)
        if (res.status) {
            yield setStore("Email", payload.email)
            yield setStore("Screen", payload.screen)
            yield put(RegisterAction.RegisterSuccess({
                message: res.message,
                timeOtp: res.time_otp
            }))
        } else {
            throw {
                message: res.message
            }
        }
    } catch (error) {
        yield put(RegisterAction.RegisterFailure({
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

const RegisterSaga = [
    takeLatest(authTypes.REGISTER_REQUEST, Register),
    takeLatest(authTypes.CLEAR_NOTIFY_REQUEST, ClearNotifications),
]
export default RegisterSaga;