import { useState } from "react";
import { Helmet } from "../components";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Helmet title="Login">
      <section className="login">
        <Container>
          <Row>
            <Col lg="6" className="mx-auto text-center">
              <h3 className="login__title">Login</h3>

              <Form className="login__form">
                <FormGroup className="login__form--group">
                  <input
                    type="email"
                    className="login__form--input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </FormGroup>

                <FormGroup className="login__form--group">
                  <input
                    type="password"
                    className="login__form--input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </FormGroup>

                <button type="submit" className="login__btn">
                  Login
                </button>
                <p className="login__description">
                  Don't have an account?{" "}
                  <Link to={"/signup"}>Create an account</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
