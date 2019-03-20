import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sendMessage } from "../../../actions/sendMessageActions";
import MessageForm from "./MessageForm";

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    channelId: state.currentChannel.id
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sendMessage }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
