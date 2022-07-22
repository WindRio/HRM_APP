import * as check from './regex'

export const verifyEmail = (email) => {
    let regex = check.regexEmail
    if (!email) return true
    if (regex.test(email)) {
        return true
    }
    return false
}

export const verifyPassword = (password) => {
    let regex = check.regexPassword
    if (!password) return true
    if (regex.test(password)) {
        return true
    }
    return false
}

export const verifyOtp = (otp) => {
    let regex = check.regexOtp
    if(!otp) return true
    if(regex.test(otp)) {
        return true
    }
    return false
}

export const verifyPhone = (phone) => {
    let regex = check.regexPhone
    if (!phone) return true
    if (regex.test(phone)) {
        return true
    }
    return false
}