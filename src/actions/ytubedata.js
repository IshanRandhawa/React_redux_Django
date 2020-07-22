import axios from "axios";
const {
  GET_YTUBEDATA_FAILURE,
  GET_YTUBEDATA_REQUEST,
  GET_YTUBEDATA_SUCCESS,
} = require("./types");

export const getYtubeData = (body) => (dispatch) => {
  dispatch({ type: GET_YTUBEDATA_REQUEST });
  axios({
    method: "post",
    url: "data/",
    data: body,
  })
    .then((response) => {
      dispatch({
        type: GET_YTUBEDATA_SUCCESS,
        payload: response.data,
      });
    })
    .catch({ type: GET_YTUBEDATA_FAILURE });
};
