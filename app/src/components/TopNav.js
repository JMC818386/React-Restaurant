import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
    return (
      <div className="mb-5">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand style={{fontSize: 40}} href="#home">Restaurant Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mr-5">
                <Nav.Link>Menu</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
}

export default TopNav