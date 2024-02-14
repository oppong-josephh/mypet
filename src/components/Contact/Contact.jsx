import { Container } from "react-bootstrap";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Map from "../../assets/map.png";

const Contact = () => {
  return (
    <>
      <Container className="mt-5">
        <div className="row">
          <div className="col-md-7">
            <div className="contact-text">
              <span>
                Contact us &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                className="contact-font"
                  icon={faPaw}
                  color="#e59500"
                  style={{
                    marginLeft: "-44px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                />
              </span>
              <br /> <br />
              <span>
                Where you can find us and how you can reach us. All the information compact for you.
              </span>

              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faPhone} style={{color: "#e59500"}}/>&nbsp;&nbsp;<strong>Phone:</strong> 123456789</li>
                <li><FontAwesomeIcon icon={faEnvelope} style={{color: "#e59500"}}/>&nbsp;&nbsp;<strong>Mail:</strong> office@mypet.com</li>
                <li><FontAwesomeIcon icon={faLocationDot} style={{color: "#e59500"}}/>&nbsp;&nbsp;<strong>Address:</strong> 233 Animal Road, 3495 NY</li>
              </ul>
            </div>
          </div>

          <div className="col-md-5 mt-5">
            <div className="a-banner">
              <img className="img-fluid" src={Map} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
