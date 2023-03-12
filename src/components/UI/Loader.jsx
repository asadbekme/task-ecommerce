import { Col } from "reactstrap";
import { loader } from "../../assets/images";

const Loader = () => {
  return (
    <Col lg="12" className="text-center">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <img
          src={loader}
          alt="Loader image"
          style={{ width: 200, height: 186 }}
        />
      </div>
    </Col>
  );
};

export default Loader;
