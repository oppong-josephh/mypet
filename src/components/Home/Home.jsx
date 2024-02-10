import { Button, Container } from "react-bootstrap";
import "./Home.css";
import Foot2 from "../../assets/foot2.png";
import Cat1 from "../../assets/cat1.png";

const Home = () => {
  return (
    <div className="main">
      <Container className="home-c">
        <div className="row">
          <div className="col-md position-relative mt-5">
            <div className="paw">
              <img src={Foot2} alt="" className="paw1 img-fluid" />
            </div>
            <div className="overlay-text">
              <span>Hello, new friend!</span>
              <br /> <br />
              <span>
                We connect animals and humans - and have done so for many years
                with passion and dedication. We look forward to introducing you
                to our daily work and animals!
              </span>
              <br /> <br />
              <Button className="h-btn1">our animals</Button>
              <Button className="h-btn2">contact us</Button>
            </div>
          </div>

          <div className="col-md mt-5">
            <div className="h-banner">
              <img className="img-fluid" src={Cat1} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
