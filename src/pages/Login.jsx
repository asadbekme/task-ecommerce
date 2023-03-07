import { useState } from "react";
import { Helmet, Loader } from "../components";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <section className="login">
        <Container>
          <Row>
            {loading ? (
              <Loader />
            ) : (
              <Col lg="6" className="mx-auto text-center">
                <h3 className="login__title">Login</h3>

                <Form className="login__form" onSubmit={signIn}>
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
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
