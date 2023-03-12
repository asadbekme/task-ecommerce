import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { CommonSection, Helmet, Loader, ProductList } from "../components";
// import products from "../utils/products";
import "../styles/product-details.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addProduct } from "../slice/cart";
import { toast } from "react-toastify";
import { db } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../hooks/useGetData";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState("description");
  const [rating, setRating] = useState(null);
  const [reviewData, setReviewData] = useState({
    userName: "",
    text: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  // const product = products.find((product) => product.id === id);
  const { data: products, loading } = useGetData("products");
  const docRef = doc(db, "products", id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("no product");
      }
    };

    getProduct();
  });

  const {
    category,
    imgUrl,
    productName,
    price,
    // avgRating,
    // reviews,
    shortDesc,
    description,
  } = product;

  const relatedProducts = products.filter(
    (product) => product.category === category
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewObj = { ...reviewData, rating: rating };
    console.log(reviewObj);
    toast.success("Review submitted.");
  };

  const addToCart = () => {
    dispatch(
      addProduct({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully.");
  };

  return (
    <Helmet title={productName}>
      {loading ? (
        <Loader />
      ) : (
        <>
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
                          <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          <i className="ri-star-half-s-fill"></i>
                        </span>
                      </div>
                      <p className="product__rating--text">
                        {/* (<span>{avgRating}</span> ratings) */}
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-5">
                      <span className="product__price">${price}</span>
                      <span>Category: {category?.toLowerCase()}</span>
                    </div>
                    <p className="product__shortDesc">{shortDesc}</p>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className="product__btn"
                      onClick={addToCart}
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
                      Reviews
                    </h6>
                  </div>

                  <div className="tab__content">
                    {tab === "description" ? (
                      <p className="tab__text">{description}</p>
                    ) : (
                      <div className="tab__reviews">
                        <div className="reviews__wrapper">
                          {/* <ul>
                            {reviews?.map((review, index) => (
                              <li key={index}>
                                <h6>John Doe</h6>
                                <span>{review.rating} (average rating)</span>
                                <p>{review.text}</p>
                              </li>
                            ))}
                          </ul> */}
                        </div>

                        <div className="reviews__form">
                          <h4>Leave your exprience</h4>
                          <form onSubmit={submitHandler}>
                            <div className="form__group">
                              <input
                                type="text"
                                placeholder="Enter name"
                                onChange={(e) =>
                                  setReviewData({
                                    ...reviewData,
                                    userName: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>

                            <div className="form__group form__group--stars">
                              <motion.span
                                whileTap={{ scale: 1.2 }}
                                onClick={() => setRating(1)}
                              >
                                1<i className="ri-star-s-fill"></i>
                              </motion.span>
                              <motion.span
                                whileTap={{ scale: 1.2 }}
                                onClick={() => setRating(2)}
                              >
                                2<i className="ri-star-s-fill"></i>
                              </motion.span>
                              <motion.span
                                whileTap={{ scale: 1.2 }}
                                onClick={() => setRating(3)}
                              >
                                3<i className="ri-star-s-fill"></i>
                              </motion.span>
                              <motion.span
                                whileTap={{ scale: 1.2 }}
                                onClick={() => setRating(4)}
                              >
                                4<i className="ri-star-s-fill"></i>
                              </motion.span>
                              <motion.span
                                whileTap={{ scale: 1.2 }}
                                onClick={() => setRating(5)}
                              >
                                5<i className="ri-star-s-fill"></i>
                              </motion.span>
                            </div>

                            <div className="form__group">
                              <textarea
                                rows={4}
                                type="text"
                                placeholder="Review message"
                                onChange={(e) =>
                                  setReviewData({
                                    ...reviewData,
                                    text: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>

                            <motion.button
                              whileTap={{ scale: 1.2 }}
                              type="submit"
                              className="form__btn"
                            >
                              Submit
                            </motion.button>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                </Col>

                <Col lg="12" className="my-5">
                  <h2 className="related__title">You might also like</h2>
                </Col>

                <ProductList data={relatedProducts} />
              </Row>
            </Container>
          </section>
        </>
      )}
    </Helmet>
  );
};

export default ProductDetails;
