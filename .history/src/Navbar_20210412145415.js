import { React } from 'react';
import * as ReactBootStrap from 'react-bootstrap';


function Nav() {
    return (

        <>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#features">Features</Nav.Link>
                        <ReactBootStrap.Nav.Link href="#pricing">Pricing</Nav.Link>
                        <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">More deets</Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                            Dank memes
      </ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </>

    );
}

export default Nav;