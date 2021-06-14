import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink activeClassName="active" exact className="nav-link" to="/first">Register</NavLink>
                    <NavLink activeClassName="active" exact className="nav-link" to="/second">Display Details</NavLink>
                    <NavLink activeClassName="active" exact className="nav-link" to="/third">All Users</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};