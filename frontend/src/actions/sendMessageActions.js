import doAction from "./doAction";
import generateActions from "./generateActions";
import sendMessageApi from "../api/sendMessageApi";
export const sendMessageAction = generateActions("SEND_MESSAGE");

export const sendMessage = ({ username, channelId, data }) => dispatch => {
  doAction(
    sendMessageAction,
    sendMessageApi,
    { username, channelId, data },
    dispatch
  );
};
