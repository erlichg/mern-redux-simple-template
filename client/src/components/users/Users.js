import React, { Component } from "react";
import PropTypes from "prop-types";

class Users extends Component {
    componentDidMount() {
        this.props.getusers();
    }

    render() {
        const { users, adduser } = this.props;
        return (
            <div>
                <h1>List of users</h1>
                <ul>{users.map(u => <li key={u._id}>{u.name}</li>)}</ul>
                <input
                    ref={e => {
                        this.input = e;
                    }}
                    type="text"
                    placeholder="User name"
                />
                <button
                    type="button"
                    onClick={() => {
                        adduser({ name: this.input.value });
                        this.input.value = "";
                    }}
                >
                    Add
                </button>
            </div>
        );
    }
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    getusers: PropTypes.func.isRequired,
    adduser: PropTypes.func.isRequired
};

export default Users;
