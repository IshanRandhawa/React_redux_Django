import { combineReducers } from "redux";
import channels from "./channels";
import ytubedata from "./ytubedata";

export default combineReducers({
  channels: channels,
  ytubedata: ytubedata,
});
