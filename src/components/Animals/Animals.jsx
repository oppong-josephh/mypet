import { Container, Card, Button } from "react-bootstrap";
import Dogs from "../../assets/dogs.png";
import "./Animals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import Foot2 from "../../assets/foot2.png";
import Cat8 from "../../assets/cat8.png";
import Cat3 from "../../assets/cat3.png";
import Dog1 from "../../assets/dog1.png";
import Dog2 from "../../assets/dog2.png";
import Cat6 from "../../assets/cat6.png";
import Cat7 from "../../assets/cat7.png";

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
            <div className="pet-text">
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
                On <strong>MyPet</strong> &nbsp; &nbsp;
                <FontAwesomeIcon
                  icon={faPaw}
                  color="#e59500"
                  style={{
                    marginBottom: "5px",
                    marginLeft: "-15px",
                    fontSize: "15px",
                  }}
                />
                &nbsp;you have the following benefits:
              </span>
              <ul className="list-unstyled ">
                <li>
                  {" "}
                  &nbsp; &nbsp;{" "}
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                    }}
                  />{" "}
                  &nbsp; Full consultation for everything that includes having a
                  pet.
                </li>
                <li>
                  {" "}
                  &nbsp; &nbsp;{" "}
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                    }}
                  />{" "}
                  &nbsp;24/7 phone service
                </li>
                <li>
                  {" "}
                  &nbsp; &nbsp;{" "}
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                    }}
                  />{" "}
                  &nbsp;Tips & tricks in our blog
                </li>
                <li>
                  {" "}
                  &nbsp; &nbsp;{" "}
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                    }}
                  />{" "}
                  &nbsp;Discount on pet food
                </li>
                <li>
                  {" "}
                  &nbsp; &nbsp;{" "}
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                    }}
                  />{" "}
                  &nbsp;Training for dogs
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 main-animals mt-lg-5">
            <div className="animals-text">
              <span>Our animals <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-12px",
                      marginBottom: "10px",
                      fontSize: "30px"
                    }}
                  /></span>
              <br />
              <span>
                By adopting animals from the shelter, you are not only giving
                this creature a new home, you are also giving love, confidence
                and also a new perspective. Many of our animals have not been
                able to experience this until this special moment.
              </span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="a-paw">
              <img src={Foot2} alt="" className="a-paw1 img-fluid" />
            </div>
          </div>

          <div className="col-md-4 animals-imgs">
            <Card className="text-white  border-0 custom-card mt-4">
              <Card.Img
                src={Cat8}
                alt="Card image"
                className="img-fluid custom-card2"
                style={{width: "21rem"}}
              />
              <Card.ImgOverlay style={{marginTop: "17rem"}}>
                <Card.Title>Charlie</Card.Title>
                <Card.Text className="text-white-50 ">
                5 years old, male
                </Card.Text>
                <Card.Text>more information</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div className="col-md-4 animals-imgs mt-4">
            <Card className="text-white  border-0 custom-card">
              <Card.Img
                src={Dog1}
                alt="Card image"
                className="img-fluid custom-card2"
                style={{width: "21rem"}}
              />
              <Card.ImgOverlay style={{marginTop: "17rem"}}>
                <Card.Title>Luna</Card.Title>
                <Card.Text className="text-white-50 ">
                2 years old, female
                </Card.Text>
                <Card.Text>more information</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div className="col-md-4 animals-imgs mt-4">
            <Card className="text-white  border-0 custom-card">
              <Card.Img
                src={Cat7}
                alt="Card image"
                className="img-fluid custom-card2"
                style={{width: "21rem"}}
              />
              <Card.ImgOverlay style={{marginTop: "17rem"}}>
                <Card.Title>Jeff</Card.Title>
                <Card.Text className="text-white-50 ">
                9 months old, male
                </Card.Text>
                <Card.Text>more information</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div className="col-md-4 animals-imgs mt-4">
            <Card className="text-white  border-0 custom-card">
              <Card.Img
                src={Dog2}
                alt="Card image"
                className="img-fluid custom-card2"
                style={{width: "21rem"}}
              />
              <Card.ImgOverlay style={{marginTop: "17rem"}}>
                <Card.Title>Bruno</Card.Title>
                <Card.Text className="text-white-50 ">
                2 years old, male
                </Card.Text>
                <Card.Text>more information</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div className="col-md-4 animals-imgs mt-4">
            <Card className="text-white  border-0 custom-card">
              <Card.Img
                src={Cat6}
                alt="Card image"
                className="img-fluid custom-card2"
                style={{width: "21rem"}}
              />
              <Card.ImgOverlay style={{marginTop: "17rem"}}>
                <Card.Title>Lizzi</Card.Title>
                <Card.Text className="text-white-50 ">
                7 months old, female
                </Card.Text>
                <Card.Text>more information</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div className="col-md-4 animals-imgs mt-4">
            <Card className="text-white  border-0 custom-card">
              <Card.Img
                src={Cat3}
                alt="Card image"
                className="img-fluid custom-card2"
                style={{width: "21rem"}}
              />
              <Card.ImgOverlay style={{marginTop: "17rem"}}>
                <Card.Title>Walter</Card.Title>
                <Card.Text className="text-white-50 ">
                7 years old, male
                </Card.Text>
                <Card.Text>more information</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div> 
          <div className="main-btn text-center"> <br />
          <Button className="animals-btn" >See all of our little friends</Button>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default Animals;
