import { takeLatest, put } from 'redux-saga/effects'
import { authActions } from '@/actions'
import { authApi } from '@/api'
import { actionTypes } from '@/constants'
const { ChangePassAction, ClearNotify } = authActions;
const { authTypes } = actionTypes;

function* ChangePassword({ payload }) {
    try {
        // const res = yield {
        //     notifyType: 'success',
        //     message: 'Doi mat khau thanh cong'
        // }
        const res = yield authApi.changePassword({
            password: payload.password
        }, null, null, null)
        if (res.status) {
            yield put(ChangePassAction.ChangePassSuccess({
                message: res.message,
            }))
        } else {
            throw {
                message: res.message
            }
        }
    } catch (error) {
        yield put(ChangePassAction.ChangePassFailure({
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

const ChangePasswordSaga = [
    takeLatest(authTypes.CHANGE_PASSWORD_REQUEST, ChangePassword),
    takeLatest(authTypes.CLEAR_NOTIFY_REQUEST, ClearNotifications),
]

export default ChangePasswordSaga;