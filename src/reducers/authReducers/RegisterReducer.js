import { actionTypes } from '@/constants';
const { authTypes } = actionTypes;

const initialState = {
  isFetching: false,
  message: null,
  isError: false,
  timeOtp: null,
  errorMessage: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: null,
        isError: false,
        timeOtp: null,
        errorMessage: null,
      }
    case authTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
        timeOtp: payload.timeOtp,
        isError: false,
        errorMessage: null,
      }
    case authTypes.REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: null,
        isError: true,
        errorMessage: payload.message,
      }
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
      return state
  }
}
