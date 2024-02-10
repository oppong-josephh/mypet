import { Container } from "react-bootstrap"
import Dogs from "../../assets/dogs.png"
import './Animal.css'


const Animals = () => {
  return (
    <>
        <Container>
        <div className="row">
          <div className="col-md mt-5">
            <div className="a-banner">
              <img className="img-fluid" src={Dogs} alt="" />
            </div>
          </div>

          <div className="col-md mt-5">
            <div className="animals-text">
              <span>Hello, new friend!</span>
              <br /> <br />
              <span>
                We connect animals and humans - and have done so for many years
                with passion and dedication. We look forward to introducing you
                to our daily work and animals!
              </span>
            </div>
          </div>
        </div>
        </Container>
    </>
  )
}

export default Animals