import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { logo, userIcon } from "../../assets/images";
import { navLinks } from "../../utils/constants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="header__wrapper">
            <div className="header__logo">
              <img src={logo} alt="Logo" />
              <span>Ecommerce</span>
            </div>

            <div className="header__navigation">
              <ul className="header__menu">
                {navLinks.map((item, idx) => (
                  <li className="nav__item" key={idx}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header__icons">
              <span className="heart__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="user__icon">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="User icon"
                />
              </span>
            </div>

            <div className="header__mobile--menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
