import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import HomePage from "./HomePage";
const mapStateToProps = state => {
  return state.auth;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
