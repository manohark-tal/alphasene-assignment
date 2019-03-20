import * as actions from "../actions/types";
const currentChannel = {
  id: 1,
  name: "Development"
};

export default function(state = currentChannel, action) {
  switch (action.type) {
    default:
      return state;
  }
}
