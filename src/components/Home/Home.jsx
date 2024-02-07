import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md">
            <span>Hello, new friend!</span>
            <span>
              We connect animals and humans - and have done so for many years
              with passion and dedication. We look forward to introducing you to
              our daily work and animals!
            </span>
            <Button></Button>
            <Button></Button>
          </div>
          
          <div className="col-md">
            <span>Hello, new friend!</span>
            <span>
              We connect animals and humans - and have done so for many years
              with passion and dedication. We look forward to introducing you to
              our daily work and animals!
            </span>
            <Button></Button>
            <Button></Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
