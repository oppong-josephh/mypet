import { Button, Navbar, Nav, Container } from 'react-bootstrap';

function NavExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">MyPet</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">our animals</Nav.Link>
            <Nav.Link href="#features">blog</Nav.Link>
            <Nav.Link href="#pricing">contact</Nav.Link>
          </Nav>
          <Button>get in touch</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavExample;