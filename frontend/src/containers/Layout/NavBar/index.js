import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { bindActionCreators } from "redux";
import NavBar from "./NavBar";
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser }, dispatch);
};
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    username: state.auth.username
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
