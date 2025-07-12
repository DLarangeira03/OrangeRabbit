//Criação de uma barra de navegação
import "./navbar.css"
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import orangeRabbit from "./OrangeRabbit_resized.png"
import { Link } from "react-router-dom";


//função que cria a navBar
function NavbarDark() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img src={orangeRabbit} alt="logo" />
          <Navbar.Brand className='navbrand'>Orange Rabbit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>  <Link to="/">Home</Link></Nav.Link>
            <Nav.Link > <Link to="/shopHoodie">Hoodie</Link></Nav.Link>
            <Nav.Link > <Link to="/shopBottom">Bottom</Link></Nav.Link>
            <Nav.Link > <Link to="/LogIn">Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>


  );
}

//exporta a função 
export default NavbarDark;