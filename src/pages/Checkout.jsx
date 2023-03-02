import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Helmet, CommonSection } from "../components";
import FormInput from "../components/UI/FormInput";
import "../styles/checkout.scss";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section className="checkout">
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="checkout__title mb-4 fw-bold">
                Billing Information
              </h6>
              <Form className="checkout__form">
                <FormInput placeholder={"Enter your name"} />
                <FormInput type="email" placeholder={"Enter your email"} />
                <FormInput type="number" placeholder={"Phone number"} />
                <FormInput placeholder={"Street address"} />
                <FormInput placeholder={"City"} />
                <FormInput placeholder={"Postal code"} />
                <FormInput placeholder={"Country"} />
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Quantity: <span>{totalQuantity} products</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping:
                  </span>{" "}
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="checkout__btn auth__btn">
                  Place in order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
