import doAction from "./doAction";
import generateActions from "./generateActions";
export const loginAction = generateActions("LOGIN");
export const logoutAction = generateActions("LOGOUT");

export const loginUser = username => dispatch => {
  doAction(loginAction, undefined, { username }, dispatch);
};

export const logoutUser = username => dispatch => {
  doAction(logoutAction, undefined, { username }, dispatch);
};
