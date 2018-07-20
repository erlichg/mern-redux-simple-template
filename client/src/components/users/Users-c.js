import { connect } from "react-redux";
import { adduser, getusers } from "../../actions";
import Users from "./Users";

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    adduser: user => dispatch(adduser(user)),
    getusers: () => dispatch(getusers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
