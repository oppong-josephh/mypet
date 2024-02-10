import { Container } from "react-bootstrap";
import Dogs from "../../assets/dogs.png";
import "./Animals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Animals = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-5 mt-5">
            <div className="a-banner">
              <img className="img-fluid" src={Dogs} alt="" />
            </div>
          </div>

          <div className="col-md-7 mt-5">
            <div className="animals-text">
              <span>Welcome to MyPet</span>
              <br /> <br />
              <span>
                The reason why animals need our help are very diverse. Our
                shelter is mainly a refuge for pets in need, such, dogs, cats,
                small animals, birds and exotics. However, we also provide first
                aid and care for any wild animals. Many of our charges have a
                sad history with them and our task is to find a loving home and
                the right match for them.
              </span>
              <br /> <br />
              <span>
                On <strong>MyPet</strong>{" "}
                <FontAwesomeIcon
                  icon={faPaw}
                  color="#e59500"
                  style={{ marginTop: "-20px", marginLeft: "-15px" }}
                />
                you have the following benefits:
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Animals;
