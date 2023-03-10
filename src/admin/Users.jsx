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
    toast.success("User deleted!");
  };

  return (
    <section>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col lg="12">
              <h4 className="text-center fw-bold">Users</h4>
            </Col>
            <Col lg="12" className="pt-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData?.map((user) => (
                    <tr>
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
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Users;
