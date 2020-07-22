import axios from "axios";

import { GET_CHANNELS } from "./types";

export const getChannels = () => (dispatch) => {
  axios
    .get("api/api/")
    .then((res) => {
      dispatch({
        type: GET_CHANNELS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//DELETE LEADS
// export const deleteLeads = (id) => (dispatch) => {
//   axios
//     .delete(`/api/leads/${id}/`)
//     .then((res) => {
//       dispatch({
//         type: DELETE_LEADS,
//         payload: id,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// //ADD LEADS

// export const addLeads = (lead) => (dispatch) => {
//   axios
//     .post(`/api/leads/`, lead)
//     .then((res) => {
//       dispatch({
//         type: ADD_LEADS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };
