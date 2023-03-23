import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
// import { faCircleNotched } from "@fortawesome/react-fontawesome";

const LoadingRecipe = () => {
  return (
    <Container>
      <Card className="my-3">
        {/* <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>Sure Chef! Coming right up! </Card.Text>
        </Card.Body> */}
        <FontAwesomeIcon icon={faUtensils} className="fa-fade" size="2x" />
        <FontAwesomeIcon icon={faUtensils} className="fa-flip" size="2x" />
        <FontAwesomeIcon icon={faCircleNotch} className="fa-fade" size="2x" />
        <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" size="2x" />
      </Card>
    </Container>
  );
};

export default LoadingRecipe;
