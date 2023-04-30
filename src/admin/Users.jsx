import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Loader } from "../components";
import useGetData from "../hooks/useGetData";
import { db } from "../firebase/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Users = () => {
  const { data: usersData, loading } = useGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("Foydalanuvchi o'chirildi!");
  };

  return (
    <section>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col lg="12">
              <h4 className="text-center fw-bold">Foydalanuvchilar</h4>
            </Col>
            <Col lg="12" className="pt-5">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Rasm</th>
                      <th>Ism</th>
                      <th>Email</th>
                      <th>Harakat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData?.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <img src={user.photoURL} alt="User photo" />
                        </td>
                        <td>{user.displayName}</td>
                        <td>{user.email}</td>
                        <td>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Users;
