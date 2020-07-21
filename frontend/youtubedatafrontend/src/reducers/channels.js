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
// case DELETE_LEADS:
//   return {
//     ...state,
//     leads: state.leads.filter((lead) => lead.id !== action.payload),
//   };
// case ADD_LEADS:
//   return {
//     ...state,
//     leads: [...state.leads, action.payload],
//   };
