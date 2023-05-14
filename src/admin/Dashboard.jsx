import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.scss";
import useGetData from "../hooks/useGetData";
import { Loader } from "../components";

const Dashboard = () => {
  const { data: products, loading } = useGetData("products");
  const { data: users } = useGetData("users");

  return (
    <section>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5 className="box__title">Jami sotuvlar</h5>
                <span className="box__value">$789</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="orders__box">
                <h5 className="box__title">Buyurtmalar</h5>
                <span className="box__value">77</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5 className="box__title">Barcha mahsulotlar</h5>
                <span className="box__value">{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5 className="box__title">Barcha mijozlar</h5>
                <span className="box__value">{users.length}</span>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Dashboard;
