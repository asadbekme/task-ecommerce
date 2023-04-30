import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Helmet, CommonSection } from "../components";
import FormInput from "../components/UI/FormInput";
import "../styles/checkout.scss";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Pul to'lash" />

      <section className="checkout">
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="checkout__title mb-4 fw-bold">
                To'lov ma'lumotlari
              </h6>
              <Form className="checkout__form">
                <FormInput placeholder={"Ism kiriting"} />
                <FormInput type="email" placeholder={"Email kiriting"} />
                <FormInput
                  type="number"
                  placeholder={"Telefon raqam kiriting"}
                />
                <FormInput placeholder={"Ko'cha manzili"} />
                <FormInput placeholder={"Shahar"} />
                <FormInput placeholder={"Pochta kodi"} />
                <FormInput placeholder={"Davlat"} />
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Umumiy miqdor: <span>{totalQuantity} ta mahsulot</span>
                </h6>
                <h6>
                  Jami: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Yetkazib berish: <br />
                    Bepul yetkazib berish:
                  </span>{" "}
                  <span>$0</span>
                </h6>
                <h4>
                  Umumiy xarajat: <span>${totalAmount}</span>
                </h4>
                <button className="checkout__btn auth__btn">
                  Buyurtmani tasdiqlash
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
