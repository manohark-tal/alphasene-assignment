import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentChannel from "./channelReducer";

export default combineReducers({
  auth: authReducer,
  currentChannel
});
