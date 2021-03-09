import React from "react"
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
import "bootstrap"

function NavbarComponent()
{
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Link to="/" className="navbar-brand">Bushido-Eshop</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Market" className="nav-link">Market</Link>
            <Link to="/About" className="nav-link">About</Link>
            
            <NavDropdown title="Categorii" id="basic-nav-dropdown">
              <Link to="/Market/judo" className="dropdown-item">Judo</Link>
              <Link to="/Market/karate" className="dropdown-item">Karate</Link>
              <Link to="Market/kickbox" className="dropdown-item">Kickbox</Link>
              <Link to="/Market/mma" className="dropdown-item">MMA</Link>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> 
    );
}

export default NavbarComponent;