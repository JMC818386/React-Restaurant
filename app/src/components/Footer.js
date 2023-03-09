import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
    return (
        <div className="mt-5">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link>Open 7 Days a Week | 7am - 3pm</Nav.Link>
                    </Nav>
                    <Navbar.Brand style={{fontSize: 30}}>348 E Main St | Lexington, Ky 40507</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer