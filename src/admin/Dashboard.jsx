import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.scss";
import useGetData from "../hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5 className="box__title">Total Sales</h5>
                <span className="box__value">$7890</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="orders__box">
                <h5 className="box__title">Orders</h5>
                <span className="box__value">789</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5 className="box__title">Total Products</h5>
                <span className="box__value">{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5 className="box__title">Total Users</h5>
                <span className="box__value">{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
