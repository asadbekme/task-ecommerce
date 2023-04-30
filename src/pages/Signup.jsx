import { useState } from "react";
import { Helmet, Loader } from "../components";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/signup.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage, db } from "../firebase/firebase.config";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `/images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            // store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email: email,
              photoURL: downloadURL,
            });
          });
        }
      );

      // console.log(user);
      setLoading(false);
      toast.success("Akkount yaratildi");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Nimadir noto'g'ri bajarildi");
    }
  };

  return (
    <Helmet title="Signup">
      <section className="signup">
        <Container>
          <Row>
            {loading ? (
              <Loader />
            ) : (
              <Col lg="6" className="mx-auto text-center">
                <h3 className="signup__title">Ro'yhatdan o'tish</h3>

                <Form className="signup__form" onSubmit={signup}>
                  <FormGroup className="signup__form--group">
                    <input
                      type="text"
                      className="signup__form--input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Ism kiriting"
                    />
                  </FormGroup>

                  <FormGroup className="signup__form--group">
                    <input
                      type="email"
                      className="signup__form--input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email kiriting"
                    />
                  </FormGroup>

                  <FormGroup className="signup__form--group">
                    <input
                      type="password"
                      className="signup__form--input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Parol kiriting"
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
                    Ro'yhatdan o'tish
                  </button>
                  <p className="signup__description">
                    Akkountingiz bormi? <Link to={"/login"}>Kirish</Link>
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

export default Signup;
