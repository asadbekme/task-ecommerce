import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { CommonSection, Helmet } from "../components";
import products from "../utils/products";
import "../styles/product-details.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductDetails = () => {
  const [tab, setTab] = useState("description");
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
  } = product;

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0 bg-white">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="Product image" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2 className="product__productName">{productName}</h2>
                <div className="product__rating">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p className="product__rating--text">
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <span className="product__price">${price}</span>
                <p className="product__shortDesc">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="product__btn"
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0 bg-white">
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper">
                <h6
                  className={tab === "description" ? "tab__active" : ""}
                  onClick={() => setTab("description")}
                >
                  Description
                </h6>
                <h6
                  className={tab === "reviews" ? "tab__active" : ""}
                  onClick={() => setTab("reviews")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              <div className="tab__content">
                {tab === "description" ? (
                  <p className="tab__text">{description}</p>
                ) : (
                  <div className="tab__reviews">
                    <div className="reviews__wrapper">
                      <ul>
                        {reviews?.map((review, index) => (
                          <li key={index}>
                            <h6>John Doe</h6>
                            <span>{review.rating} (average rating)</span>
                            <p>{review.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="reviews__form">
                      <h4>Leave your exprience</h4>
                      <form action="./server.js">
                        <div className="form__group">
                          <input type="text" placeholder="Enter name" />
                        </div>

                        <div className="form__group form__group--stars">
                          <span>
                            1<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            2<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            3<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            4<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            5<i className="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <div className="form__group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Review message"
                          />
                        </div>

                        <button type="submit" className="form__btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
