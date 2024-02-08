import { Button, Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function NavExample() {
  return (
    <>
      <Navbar className="navbg" bg="#" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className="logo">MyPet </Navbar.Brand>
          <FontAwesomeIcon
            icon={faPaw}
            color="#e59500"
            style={{ marginTop: "-20px", marginLeft: "-15px" }}
          />
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="link">our animals</Nav.Link>
            <Nav.Link href="#features" className="link">blog</Nav.Link>
            <Nav.Link href="#pricing" className="link">contact</Nav.Link>
          </Nav>
          <Button className="button">get in touch</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavExample;
