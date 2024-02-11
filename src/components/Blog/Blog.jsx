import "./Blog.css";
import { Container, Card,Button } from "react-bootstrap";
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
            <Card
              style={{ width: "21rem" }}
              className="border-0 blog-custom-card"
            >
              <Card.Img
                variant="top"
                src={Cat5}
                className="blog-custom-card2"
              />
              <Card.Body>
                <Card.Title>6 reasons why your cat licks your hair.</Card.Title>
                <Card.Text>
                  Did you ever wonder what it means when your cat have multiple
                  reasons and we...
                </Card.Text>
                <div className="b-read text-center">
                <span>
                  read more &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                      marginBottom: "5px",
                    }}
                  />
                </span>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 blog-imgs mt-4">
            <Card
              style={{ width: "21rem" }}
              className="border-0 blog-custom-card"
            >
              <Card.Img
                variant="top"
                src={Dog3}
                className="blog-custom-card2"
              />
              <Card.Body>
                <Card.Title>
                  What dog bed is the best for my little friend?
                </Card.Title>
                <Card.Text>
                  The choice is enormous. From premium luxury beds to very
                  simple. What should I look for and how...
                </Card.Text>
                <div className="b-read text-center">
                <span>
                  read more &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                      marginBottom: "5px",
                    }}
                  />
                </span>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 blog-imgs mt-4">
            <Card
              style={{ width: "21rem" }}
              className="border-0 blog-custom-card"
            >
              <Card.Img
                variant="top"
                src={Cat4}
                className="blog-custom-card2"
              />
              <Card.Body>
                <Card.Title>15 foods you should never gives your cat.</Card.Title>
                <Card.Text>
                  We all love our cats and we want to treat them right. But why
                  shouldn&apos;t I give my cat to eat? There are some...
                </Card.Text>
                <div className="b-read text-center">
                <span>
                  read more &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faPaw}
                    color="#e59500"
                    style={{
                      marginLeft: "-15px",
                      fontSize: "15px",
                      marginBottom: "5px",
                    }}
                  />
                </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="main-btn text-center"> <br />
          <Button className="blog-btn" >more blog post</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
