import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet, Services } from "../components";
import { motion } from "framer-motion";
import { heroImg } from "../assets/images";
import "../styles/home.scss";
import ProductList from "../components/UI/ProductList";
import products from "../utils/products";

const Home = () => {
  const [data, setData] = useState(products);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === "chair"
    );
    setData(filteredProducts);
  }, []);

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

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="trending__products--title title">
                Trending Products
              </h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
