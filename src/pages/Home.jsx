import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet, Services, ProductList, Clock } from "../components";
import { motion } from "framer-motion";
import { counterTimerImg, heroImg } from "../assets/images";
import "../styles/home.scss";
import products from "../utils/products";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (product) => product.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (product) => product.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (product) => product.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (product) => product.category === "wireless"
    );

    setBestSalesProducts(filteredBestSalesProducts);
    setTrendingProducts(filteredTrendingProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
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
            <Col lg="12" className="text-center mb-4">
              <h2 className="trending__products--title title">
                Trending Products
              </h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h2 className="best__sales--title title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="timer__count--content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="timer__count--btn"
              >
                <Link to="/shop">Visit store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img
                className="timer__count--img"
                src={counterTimerImg}
                alt="Counter timer"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h2 className="new__arrivals--title title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
