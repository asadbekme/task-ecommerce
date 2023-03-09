import { Container, Row } from "reactstrap";
import useAuth from "../hooks/useAuth";
import "../styles/admin-header.scss";
import { NavLink } from "react-router-dom";
import { adminNavbar } from "../utils/constants";

const AdminHeader = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <header className="admin__header">
        <div className="admin__header--top">
          <Container>
            <div className="admin__header--wrapper">
              <div className="admin__header--logo">
                <h2>Ecommerce</h2>
              </div>

              <div className="admin__header--search">
                <input type="text" placeholder="Search..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

              <div className="admin__header--settings">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={currentUser.photoURL} alt="Current user" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <nav className="admin__menu">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu--list">
                {adminNavbar.map((item, idx) => (
                  <li key={idx} className="admin__menu--item">
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "admin__menu--active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </nav>
    </>
  );
};

export default AdminHeader;
