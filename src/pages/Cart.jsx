import "../styles/cart.scss";
import { Helmet, CommonSection } from "../components";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../slice/cart";

const Cart = () => {
  const { cartProducts, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Helmet title="Cart">
      <CommonSection title={"Shopping Cart"} />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartProducts.length === 0 ? (
                <h2 className="fs-4 text-center">
                  No product added to the cart
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>ProductName</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartProducts.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img src={product.imgUrl} alt="Product image" />
                        </td>
                        <td>{product.productName}</td>
                        <td>${product.price}</td>
                        <td>{product.quantity} px</td>
                        <td onClick={() => dispatch(deleteProduct(product.id))}>
                          <motion.i
                            whileTap={{ scale: 1.2 }}
                            className="ri-delete-bin-line"
                          ></motion.i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div className="d-flex align-items-center justify-content-between">
                <h6>Subtotal</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="mt-4 text-black">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="btn__buy w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="btn__buy w-100">
                  <Link to="/shop">Countinue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
