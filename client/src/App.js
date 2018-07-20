import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home-c";
import Users from "./components/users/Users-c";

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navbar expand="md">
                        <NavbarBrand href="/">
                            <img src={logo} className="App-logo" alt="logo" />Welcome
                            to React
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/users">Users</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/users" component={Users} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
