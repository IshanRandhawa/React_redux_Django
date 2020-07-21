import {
  GET_YTUBEDATA_FAILURE,
  GET_YTUBEDATA_REQUEST,
  GET_YTUBEDATA_SUCCESS,
} from "../actions/types";

const intitialState = {
  loading: false,
  ytubedata: [],
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_YTUBEDATA_REQUEST:
      return { ...state, loading: true };
    case GET_YTUBEDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        ytubedata: action.payload,
      };
    case GET_YTUBEDATA_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
}
