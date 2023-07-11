import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "../Cartwidget/CartWidget";
import { RiSearchLine } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home"><img src="https://cdn-icons-png.flaticon.com/512/4120/4120941.png" alt="" /><span className='titulo'>e-commerce</span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Reservas">Reservas</Nav.Link>
            <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
          </Nav>
          <div className="navbar-nav nav-link">
          <Nav.Link href="#Registro">Registro</Nav.Link>
          <Nav.Link href="#Buscar"><RiSearchLine/></Nav.Link>
          <Nav.Link href="#Carrito"><CartWidget/></Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;