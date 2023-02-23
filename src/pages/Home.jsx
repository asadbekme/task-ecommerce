import { Helmet, Services } from "../components";
import { Container, Row, Col } from "reactstrap";
import { heroImg } from "../assets/images";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2 className="hero__title">
                  Make your interior more minimalistic & modern
                </h2>
                <p className="hero__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, veritatis saepe animi doloremque amet necessitatibus
                  praesentium sed!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="hero__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__image">
                <img src={heroImg} alt="Hero image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      
    </Helmet>
  );
};

export default Home;
