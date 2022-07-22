import { actionTypes } from '@/constants';
const { authTypes } = actionTypes;

const INITIAL_STATE = {
  isFetching: false,
  message: null,
  timeOtp: null,
  isError: false,
  errorMessage: null,
};

export default function ForgotReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case authTypes.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: null,
        timeOtp: null,
        isError: false,
        errorMessage: null,
      };
    case authTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
        timeOtp: payload.timeOtp,
        isError: false,
        errorMessage: null,
      };
    case authTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: null,
        isError: true,
        errorMessage: payload.message,
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
