import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/Trifecta 1.png";

function Header() {
  return (
    <Navbar className="color" expand="lg">
      <Container fluid>
        <Link style={{ textDecoration: "none"}} to="/">
          <img src={logo} /> <span className="color">TRIFECTA</span>
        </Link>{" "}
       
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px"  }}
            navbarScroll
          >
            <Link 
              to="/"
              style={{
                textDecoration: "none",
                marginLeft: 1,
                marginRight: 30,
              }}
            >
              <span className="color">Home</span>
            </Link>
            <a href="#doctor"
              
              style={{ textDecoration: "none", marginRight: 30 }}
            >
              <span>Doctors</span>
            </a>
            <Link
              to="/Services"
              style={{ textDecoration: "none", marginRight: 30 }}
            >
              <span>Services</span>
            </Link>
            <a href="#About us"
            
              style={{ textDecoration: "none", marginRight: 30 }}
            >
              <span>About us</span>
            </a>
            <a href="#Contact us"
             
              style={{ textDecoration: "none", marginRight: 30 }}
            >
              <span >Contact us</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
