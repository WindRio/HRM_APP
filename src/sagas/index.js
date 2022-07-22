import { all } from 'redux-saga/effects'
import * as authSaga from './authSaga'
const {ForgotPassSaga, RegisterSaga, LoginSaga, ChangePasswordSaga,OtpSaga} = authSaga

export default function* rootSaga() {
    yield all([
        ...ForgotPassSaga,
        ...LoginSaga,
        ...RegisterSaga,
        ...ChangePasswordSaga,
        ...OtpSaga
    ])
}