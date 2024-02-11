import "./Footer.css";
import { Container } from "react-bootstrap";
import Cat2 from "../../assets/cat2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="main-footer">
      <Container className="mt-5">
        <div className="row">
          <div className="col-md position-relative mt-5">
            <div className="paw">
              <img src={Cat2} alt="" className="fooetr-paw1 img-fluid" />
            </div>
            <div className="footer-text">
              <span>
                MyPet{" "}
                <FontAwesomeIcon
                  icon={faPaw}
                  color="#ffff"
                  style={{ marginBottom: "10px", marginLeft: "-10px" }}
                />
              </span>
              <br /> <br />
              <ul className="list-unstyled">
                <li>
                  <strong>Phone:</strong> <span style={{color: "white", fontSize: "16px"}}>123456789</span>
                </li>
                <li>
                  <strong>Mail:</strong> <span style={{color: "white", fontSize: "16px"}}>office@mypet.com</span>
                </li>
                <li>
                 <strong>Address:</strong> <span style={{color: "white", fontSize: "16px"}}>233 Animal Road, 3495 NY</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="terms">
                <ul className="list-unstyled text-decoration-underline">
                    <li>Privacy policy</li>
                    <li>Cookie notice</li>
                    <li>24/7 service</li>
                </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
