import { FormGroup } from "reactstrap";
import "../../styles/checkout.scss";

const FormInput = ({ type = "text", placeholder }) => {
  return (
    <FormGroup className="checkout__form--group">
      <input
        className="checkout__form--input"
        type={type}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

export default FormInput;
