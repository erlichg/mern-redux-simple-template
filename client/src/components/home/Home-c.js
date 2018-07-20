import { connect } from "react-redux";
import { increment, decrement } from "../../actions";
import Home from "./Home";

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
