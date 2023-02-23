import { Container, Row, Col } from "reactstrap";
import "./Services.scss";
import { motion } from "framer-motion";
import { servicesData } from "../../utils/servicesData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {servicesData.map((item, idx) => (
            <Col lg="3" md="4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="services__item"
                key={idx}
                style={{ background: `${item.bg}` }}
              >
                <span className="services__icon">
                  <i className={item.icon}></i>
                </span>
                <div className="services__content">
                  <h3 className="services__title">{item.title}</h3>
                  <p className="services__subtitle">{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
