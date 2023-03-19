import KitchenItem from "./KitchenItem";
import { Container, CardGroup } from "react-bootstrap";

const KitchenItemList = () => {
  return (
    <Container>
      <div>Kitchen Item list:</div>
      <CardGroup>
        <KitchenItem />
        <KitchenItem />
      </CardGroup>
    </Container>
  );
};

export default KitchenItemList;
