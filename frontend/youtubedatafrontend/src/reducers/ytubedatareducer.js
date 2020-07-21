import { GET_YTUBEDATA } from "../actions/types";

const intitialState = {
  loading: true,
  ytubedata: [],
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_YTUBEDATA:
      return {
        ytubedata: action.payload,
      };
    default:
      return state;
  }
}
