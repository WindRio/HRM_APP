import Login from "./LoginScreen";
import Register from './RegisterScreen'
import ForgotPassword from "./ForgotScreen";
import ChangePassword from "./ChangePasswordScreen";
import Otp from './OtpScreen'

const authenScreens = [
    {
        name: 'Login',
        component: Login
    },
    {
        name: 'Register',
        component: Register
    },
    {
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        name: 'ChangePassword',
        component: ChangePassword
    },
    {
        name: 'Otp',
        component: Otp
    },
]

export default authenScreens;

