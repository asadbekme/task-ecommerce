import { Container, Col, Row } from "reactstrap";
import useGetData from "../hooks/useGetData";
import { Loader } from "../components";
import { db } from "../firebase/firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");
  console.log(productsData);

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Mahsulot o'chirildi!");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <Loader />
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Rasm</th>
                      <th>Sarlavha</th>
                      <th>Kategoriya</th>
                      <th>Narx</th>
                      <th>Harakat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsData.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img src={product.imgUrl} alt="Product image" />
                        </td>
                        <td>{product.productName}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>
                          <button
                            onClick={() => deleteProduct(product.id)}
                            className="btn btn-danger"
                          >
                            O'chirish
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
