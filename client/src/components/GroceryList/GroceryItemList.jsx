import GroceryItem from "./GroceryItem";
import { Container, CardGroup } from "react-bootstrap";

const GroceryItemList = () => {
  return (
    <Container>
      <div>Grocery item list:</div>
      <CardGroup>
        <GroceryItem />
        <GroceryItem />
      </CardGroup>
    </Container>
  );
};

export default GroceryItemList;
