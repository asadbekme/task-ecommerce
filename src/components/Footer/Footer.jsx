import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="footer__info">
              <h4 className="footer__title">Mebel Shop</h4>
              <p className="footer__text mt-4">
                Mebel mahsulotlari sotiladigan onlayn do'kon
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" className="mb-4">
            <div className="footer__links">
              <h4 className="footer__links--title">Eng yaxshi kategoriyalar</h4>
              <ListGroup>
                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__links">
              <h4 className="footer__links--title">Foydali havolalalr</h4>
              <ListGroup>
                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="/shop">Do'kon</Link>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="/cart">Savatcha</Link>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="/login">Kirish</Link>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0">
                  <Link to="#">Maxfiylik siyosati</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__links">
              <h4 className="footer__links--title">Aloqa</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="footer__links--item ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>Urganch shahri, Al-Xorazmiy ko'cha, 77-uy</p>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+998918775177</p>
                </ListGroupItem>

                <ListGroupItem className="footer__links--item ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>mykiki77@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Mualliflik huquqi © {year} Asadbek Rakhimov ishlab chiqilgan.
              Barcha huquqlar himoyalangan.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
