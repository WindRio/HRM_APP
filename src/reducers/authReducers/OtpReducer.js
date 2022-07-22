import { actionTypes } from '@/constants';
const { authTypes } = actionTypes;

const INITIAL_STATE = {
  isFetching: false,
  message: null,
  resend: null,
  isError: false,
  errorMessage: null,
  userToken: null,
}

export default function OtpReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case authTypes.OTP_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        resend: null,
        errorMessage: null,
        message: null
      }
    case authTypes.OTP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
        resend: payload.resend,
        isError: false,
        errorMessage: null,
      }
    case authTypes.OTP_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: null,
        resend: null,
        errorMessage: payload.message,
        isError: true,
      }
    case authTypes.CLEAR_NOTIFY_REQUEST:
      return {
        ...state,
      };
    case authTypes.CLEAR_NOTIFY_SUCCESS:
      return {
        ...state,
        message: null,
        isError: false,
        errorMessage: null
      };
    case authTypes.CLEAR_NOTIFY_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: payload.message,
      };
    default:
      return state
  }
}