import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet, Services, ProductList, Clock, Loader } from "../components";
import { motion } from "framer-motion";
import { counterTimerImg, heroImg } from "../assets/images";
import "../styles/home.scss";
import useGetData from "../hooks/useGetData";
// import products from "../utils/products";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();
  const { data: products, loading } = useGetData("products");
  // console.log(products);

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

    const filteredPopularProducts = products.filter(
      (product) => product.category === "watch"
    );

    setBestSalesProducts(filteredBestSalesProducts);
    setTrendingProducts(filteredTrendingProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="hero">
            <Container>
              <Row>
                <Col lg="6" md="6">
                  <div className="hero__content">
                    <p className="hero__subtitle">
                      {year}-yilning trendagi mebel mahsulotlari
                    </p>
                    <h2 className="hero__title">
                      Ichki makoningizni minimalistik va zamonaviyroq qiling
                    </h2>
                    <p className="hero__description">
                      Mebellar noodatiy va orginal bo’lishi, kishi yuzida
                      tabassum paydo qilib, kayfiyatni ko’tara olishi mumkin
                      emas deya kim aytdi?
                    </p>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className="hero__btn"
                    >
                      <Link to="/shop">XARID QILING</Link>
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
                    Trendagi mahsulotlar
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
                  <h2 className="best__sales--title title">
                    Eng yaxshi sotuvdagi mahsulotlar
                  </h2>
                </Col>
                <ProductList data={bestSalesProducts} />
              </Row>
            </Container>
          </section>

          <section className="timer__count">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <div className="timer__count--content">
                    <h4 className="text-white fs-6 mb-2">
                      Cheklangan takliflar
                    </h4>
                    <h3 className="text-white fs-5 mb-3">Sifatli kreslolar</h3>
                  </div>
                  <Clock />
                  <div className="timer__count--button">
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className="timer__count--btn"
                    >
                      <Link to="/shop">Tashrif buyurish</Link>
                    </motion.button>
                  </div>
                </Col>

                <Col lg="6" md="12" className="text-end timer__count--image">
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
                  <h2 className="new__arrivals--title title">
                    Yangi kelgan mahsulotlar
                  </h2>
                </Col>
                <ProductList data={mobileProducts} />
                <ProductList data={wirelessProducts} />
              </Row>
            </Container>
          </section>

          <section className="popular__products">
            <Container>
              <Row>
                <Col lg="12" className="text-center mb-4">
                  <h2 className="popular__products--title title">
                    Ommabop mahsulotlar
                  </h2>
                </Col>
                <ProductList data={popularProducts} />
              </Row>
            </Container>
          </section>
        </>
      )}
    </Helmet>
  );
};

export default Home;
