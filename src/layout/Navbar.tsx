import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import NavbarBs from 'react-bootstrap/Navbar'

export default function Navbar() {
  return (
    <NavbarBs className="shadow-sm mb-3" bg="white" variant="light">
      <Container className="d-flex justify-content-center">
        <Nav style={{ fontSize: '1.4rem' }}>
          <Nav.Link to="/" as={NavLink}>
            Active
          </Nav.Link>
          <Nav.Link to="/archived" as={NavLink}>
            Archived
          </Nav.Link>
          <Nav.Link to="/stats" as={NavLink}>
            Stats
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  )
}
