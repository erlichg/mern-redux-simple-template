import React from "react";
import PropTypes from "prop-types";

const Home = ({ counter, increment, decrement }) => (
    <div>
        <label>{counter}</label>
        <button type="button" onClick={increment}>
            +
        </button>
        <button type="button" onClick={decrement}>
            -
        </button>
    </div>
);

Home.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};

export default Home;
