import { REST_API_METHOD as METHOD, BASE_URL } from '@/constants'

const AUTH_SCHEME = {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        REGISTER: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        FORGOT_PASSWORD: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        CHANGE_PASSWORD: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN_OTP: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        REGISTER_OTP: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        FORGOT_PASSWORD_OTP: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        RESEND_OTP: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGOUT: {
            url: `${BASE_URL}/logout`,
            method: METHOD.POST
        }
}

export default AUTH_SCHEME