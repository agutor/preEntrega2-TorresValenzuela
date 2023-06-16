import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = ()=>(
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">3 Torres Design</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#remeras">Todas las Remeras</Nav.Link>
            <Nav.Link href="#anime">Anime</Nav.Link>
            <Nav.Link href="#comics">Comics</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#peliculas">Peliculas</Nav.Link>
          </Nav>
          
      <CartWidget />
        </Container>
      </Navbar>
)