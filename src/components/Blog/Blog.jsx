import { Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import Cat5 from "../../assets/cat5.png";
import Dog3 from "../../assets/dog3.png";
import Cat4 from "../../assets/cat4.png";

const Blog = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-6 main-animals mt-5">
            <div className="animals-text">
              <span>
                Our blog{" "}
                <FontAwesomeIcon
                  icon={faPaw}
                  color="#e59500"
                  style={{
                    marginLeft: "-12px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                />
              </span>
              <br />
              <span>
                We offer tips & tricks for daily life with your pet, share
                customer stories, services, and advice from vets and trainers.
              </span>
            </div>
          </div>

          <div className="col-md-6"></div>

          <div className="col-md-4 blog-imgs mt-4">
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src={Cat5} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 blog-imgs mt-4">
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src={Dog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 blog-imgs mt-4">
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src={Cat4} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
