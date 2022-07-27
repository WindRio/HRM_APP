import { combineReducers } from 'redux'
import AuthenReducer from './AuthenReducer'


export default combineReducers({
    authenStore: AuthenReducer
})