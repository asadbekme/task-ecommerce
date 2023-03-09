import { Container, Col, Row } from "reactstrap";
import useGetData from "../hooks/useGetData";
import { Loader } from "../components";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");
  console.log(productsData);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <Loader />
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.imgURL} alt="Product image" />
                      </td>
                      <td>{product.title}</td>
                      <td>{product.category}</td>
                      <td>${product.price}</td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
