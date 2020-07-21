import { GET_CHANNELS } from "../actions/types.js";

const intitialState = {
  channels: [],
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        channels: action.payload,
      };
    default:
      return state;
  }
}
