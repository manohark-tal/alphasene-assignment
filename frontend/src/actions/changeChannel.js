import doAction from "./doAction";
import generateActions from "./generateActions";
export const changeChannelActions = generateActions("CHANGE_CHANNEL");

export const changeChannel = channelId => dispatch => {
  doAction(changeChannelActions, undefined, { channeId }, dispatch);
};
