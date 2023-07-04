import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import data from "../data/data.json";

const categorias = data.map((remeras) => remeras.category);
const unique = new Set(categorias);

export const NavBar = () => (
  <Navbar bg="danger" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        3 Torres Design
      </Navbar.Brand>
      <Nav className="me-auto">
        {[...unique].map((categoria) => (
          <NavLink
            to={`/category/${categoria}`}
            className="nav-link"
            style={{ textTransform: "capitalize" }}
          >
            {categoria}
          </NavLink>
        ))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
