import * as actions from "../actions/types";
const auth = {
  sendingRequest: false,
  loggedIn: false,
  username: ""
};

export default function(state = auth, action) {
  switch (action.type) {
    case actions.LOGIN.request:
      return { ...state, sendingRequest: true };

    case actions.LOGIN.succeeded:
      return {
        ...state,
        username: action.payload.username,
        loggedIn: true,
        sendingRequest: false
      };

    case actions.LOGIN.failed:
      return state;

    case actions.LOGOUT.succeeded:
      return auth;
    default:
      return state;
  }
}
