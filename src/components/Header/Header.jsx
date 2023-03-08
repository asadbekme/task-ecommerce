import { useRef, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { logo, userIcon } from "../../assets/images";
import { navLinks } from "../../utils/constants";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileShowRef = useRef(null);
  const { currentUser } = useAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const headerStickyFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__sticky");
      } else {
        headerRef.current.classList.remove("header__sticky");
      }
    });
  };

  useEffect(() => {
    headerStickyFunc();

    return () => window.removeEventListener("scroll", headerStickyFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("menu__active");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () => {
    profileShowRef.current.classList.toggle("profile__show");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="header__wrapper">
            <Link to="/">
              <div className="header__logo">
                <img src={logo} alt="Logo" />
                <span>Ecommerce</span>
              </div>
            </Link>

            <div
              className="header__navigation"
              ref={menuRef}
              onClick={menuToggle}
            >
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
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile__icon">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="User icon"
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileShowRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="profile__action">
                      <Link to={"/signup"}>Signup</Link>
                      <Link to={"/login"}>Login</Link>
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="header__mobile--menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
