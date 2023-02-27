import { Container } from "reactstrap";
import "../../styles/common-section.scss";

const CommonSection = ({ title }) => {
  return (
    <div className="common__section">
      <Container className="text-center">
        <h1 className="common__title">{title}</h1>
      </Container>
    </div>
  );
};

export default CommonSection;
