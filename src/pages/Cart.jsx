import { Container, Row, Col } from "reactstrap";
import { Helmet, CommonSection } from "../components";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { deleteProduct } from "../slice/cart";

const Cart = () => {
  const { cartProducts, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Helmet title="Cart">
      <CommonSection title={"Shopping Cart"} />

      <section className="cart">
        <Container>
          <Row>
            <Col lg="9">
              {cartProducts.length === 0 ? (
                <h2 className="fs-4 text-center">
                  No product added to the cart
                </h2>
              ) : (
                <div className="table-responsive">
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
                          <motion.td
                            whileTap={{ scale: 1.1 }}
                            onClick={() => dispatch(deleteProduct(product.id))}
                          >
                            <i className="ri-delete-bin-line"></i>
                          </motion.td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Col>

            <Col lg="3">
              <div className="d-flex align-items-center justify-content-between">
                <h6>Subtotal</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="mt-4 text-black">
                Taxes and shipping will calculate in checkout
              </p>
              <div>
                <Link to="/checkout">
                  <button className="btn__buy w-100">Checkout</button>
                </Link>
                <Link to="/shop">
                  <button className="btn__buy w-100">Continue Shopping</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
