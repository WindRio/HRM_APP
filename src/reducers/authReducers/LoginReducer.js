import { actionTypes } from '@/constants';
const { authTypes } = actionTypes;

const INITIAL_STATE = {
  userToken: null,
  isFetching: false,
  timeOtp: null,
  message: null,
  isError: false,
  errorMessage: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_REQUEST:
    case authTypes.VALIDATE_TOKEN_REQUEST:
    case authTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
        userToken: null,
        message: null,
        timeOtp: null,
        isError: false,
        errorMessage: null,
      };
    case authTypes.LOGIN_SUCCESS:
    case authTypes.LOGOUT_SUCCESS:
    case authTypes.VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
        timeOtp: payload.timeOtp,
        isError: false,
        errorMessage: null,
      };
    case authTypes.VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
        userToken: payload.userToken,
        isError: false,
        errorMessage: null,
      };
    case authTypes.LOGIN_FAILURE:
    case authTypes.VALIDATE_TOKEN_FAILURE:
    case authTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: null,
        isError: true,
        errorMessage: payload.message,
        userToken: null,
      };
    case authTypes.CLEAR_NOTIFY_REQUEST:
      return {
        ...state,
      };
    case authTypes.CLEAR_NOTIFY_SUCCESS:
      return {
        ...state,
        message: null,
        isError: true,
        errorMessage: null
      };
    case authTypes.CLEAR_NOTIFY_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: payload.message,
      };
    default:
      return state;
  }
}
