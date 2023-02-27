import { Helmet, CommonSection } from "../components";
import { Container, Row, Col } from "reactstrap";

const Shop = () => {
  return (
    <Helmet title="shop">
      <CommonSection title={"Products"} />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'></Col>
            <Col lg='3' md='3'></Col>
            <Col lg='6' md='6'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
