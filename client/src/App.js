import React, {Component} from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home-c";
import Users from "./components/users/Users-c";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEdit, faTrashAlt)

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Navbar expand="md">
                            <NavbarBrand href="/">
                                <img src={logo} className="App-logo" alt="logo"/>React App
                            </NavbarBrand>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/users">Users</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </header>

                    <div className="container-fluid">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/users" component={Users}/>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
