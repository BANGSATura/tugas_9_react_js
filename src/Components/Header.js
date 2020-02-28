import React, { Component } from 'react';
import { Navbar, Form, Button, FormControl, Nav, NavDropdown } from 'react-bootstrap';
class Header extends Component {
  render() {
    return(
      <Navbar bg='dark' variant="dark" expand="lg">
        <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Berita</Nav.Link>
            <Nav.Link href="#">Live Scores</Nav.Link>
            <NavDropdown title="Piala & Liga">
              <NavDropdown.Item href="#">Piala</NavDropdown.Item>
              <NavDropdown.Item href="#">Liga</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Transfer Pemain</Nav.Link>
            <Nav.Link href="#">Tim</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
