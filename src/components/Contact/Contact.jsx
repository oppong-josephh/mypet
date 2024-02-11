import { Container } from "react-bootstrap";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import Map from "../../assets/map.png";

const Contact = () => {
  return (
    <>
      <Container className="mt-5">
        <div className="row">
          <div className="col-md">
            <div className="contact-text">
              <span>
                Contact us{" "} &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faPaw}
                  color="#e59500"
                  style={{
                    marginBottom: "5px",
                    marginLeft: "-15px",
                    fontSize: "15px",
                  }}
                />
              </span>
              <br /> <br />
              <span>
                The reason why animals need our help are very diverse. Our
                shelter is mainly a refuge for pets in need, such, dogs, cats,
                small animals, birds and exotics. However, we also provide first
                aid and care for any wild animals. Many of our charges have a
                sad history with them and our task is to find a loving home and
                the right match for them.
              </span>
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
