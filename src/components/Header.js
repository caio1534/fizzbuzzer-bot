import React from "react"
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Icon from './Icon'

function Header() {
  return (
    <div>
      <Navbar className='px-10' bg="light" expand="lg">
        <Link className='d-flex align-items-center justify-content-center navBrand' to="/">
          <Icon size='navIcon mr-2' />
          <Navbar.Brand>FizzBuzzer Bot</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link><Link to="/whatisfizzbuzzerbot">What is FizzBuzz?</Link></Nav.Link>
            <Nav.Link><Link to="/aboutme">About Me</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;