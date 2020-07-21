const { GET_YTUBEDATA } = require("./types");
import axios from "axios";
export const getYtubeData = (body) => (dispatch) => {
  axios({
    method: "post",
    url: "http://127.0.0.1:8000/",
    data: body,
  })
    .then((response) => {
      dispatch({
        type: GET_YTUBEDATA,
        payload: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
