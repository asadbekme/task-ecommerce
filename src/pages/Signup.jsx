import { useState } from "react";
import { Helmet } from "../components";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/signup.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  return (
    <Helmet title="Signup">
      <section className="signup">
        <Container>
          <Row>
            <Col lg="6" className="mx-auto text-center">
              <h3 className="signup__title">Signup</h3>

              <Form className="signup__form">
                <FormGroup className="signup__form--group">
                  <input
                    type="text"
                    className="signup__form--input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </FormGroup>

                <FormGroup className="signup__form--group">
                  <input
                    type="email"
                    className="signup__form--input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </FormGroup>

                <FormGroup className="signup__form--group">
                  <input
                    type="password"
                    className="signup__form--input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </FormGroup>

                <FormGroup className="signup__form--group">
                  <input
                    type="file"
                    className="signup__form--inputFile"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>

                <button type="submit" className="signup__btn">
                  Create an account
                </button>
                <p className="signup__description">
                  Already have an account? <Link to={"/login"}>Link</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
