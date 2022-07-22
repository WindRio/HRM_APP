import { takeLatest, put } from 'redux-saga/effects'
import { authActions } from '@/actions'
import { authApi } from '@/api'
import * as utils from '@/utils';
import { actionTypes } from '@/constants'
const { authTypes } = actionTypes;
const { setStore, removeStore, getStore } = utils.Storage
const { LoginAction, ClearNotify, ValidateTokenAction, LogoutAction } = authActions;

function* Login({ payload }) {
    try {
        const email = payload.email
        const res = yield {
            status: true,
            message: 'Moi vao mail lay ma OTP',
            time_otp: 10
        }
        // const res = yield authApi.login({
        //     email: payload.email,
        //     password: payload.password
        // }, null, null, null)
        if (res.status) {
            yield setStore("Email", email)
            const store = yield getStore("Email")
            console.log(store)
            yield setStore("Screen", payload.screen)
            yield put(LoginAction.LoginSuccess({
                message: res.message,
                timeOtp: res.time_otp
            }))
        } else {
            throw {
                message: res.message
            }
        }
    } catch (error) {
        yield put(LoginAction.LoginFailure({
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

function* ValidateToken({ payload }) {
    try {
        const res = yield {
            status: false,
            message: 'moi ban dang nhap lai'
        }
        // const res = yield authApi.validateToken(null, null, null, payload.token)
        if (res.status) {
            yield put(ValidateTokenAction.ValidateTokenSuccess({
                token: payload.token,
            }))
        } else {
            yield removeStore('userToken')
            throw {
                message: res.message
            }
        }
    } catch (error) {
        yield put(ValidateTokenAction.ValidateTokenFailure({
            message: error.message,
        }))
    }
}

function* Logout() {
    try {
        yield put(LogoutAction.LogoutSuccess({
            userToken: null
        }))
    } catch (error) {
        yield put(LogoutAction.LogoutFailure({
            message: error.message,
        }))
    }
}

const LoginSaga = [
    takeLatest(authTypes.LOGIN_REQUEST, Login),
    takeLatest(authTypes.CLEAR_NOTIFY_REQUEST, ClearNotifications),
    takeLatest(authTypes.VALIDATE_TOKEN_REQUEST, ValidateToken),
    takeLatest(authTypes.LOGOUT_REQUEST, Logout),
]

export default LoginSaga;