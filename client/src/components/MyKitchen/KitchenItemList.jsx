import KitchenItem from "./KitchenItem";
import { Container, CardGroup, Accordion } from "react-bootstrap";

const KitchenItemList = (props) => {
  const kitchenItemsSort = (storageLocation) => {
    const kitchenItemList = props.userKitchenItems.map((kitchenItem) => {
      if(storageLocation === kitchenItem.storage_location) {
        return (
          <KitchenItem
            key={kitchenItem.id}
            id={kitchenItem.id}
            name={kitchenItem.name}
            quantity={kitchenItem.quantity}
            onDelete={props.onDelete}
          />
        )
      };
    })
    return kitchenItemList;
  }

  return (
    <Container className="my-3">
      <h3 className="my-3">My Kitchen:</h3>
      <Accordion>
      <Accordion.Item eventKey="0">
          <Accordion.Header>Refrigerator</Accordion.Header>
          <Accordion.Body>
            {kitchenItemsSort('Refrigerator')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Freezer</Accordion.Header>
          <Accordion.Body>
            {kitchenItemsSort('Freezer')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Pantry</Accordion.Header>
          <Accordion.Body>
            {kitchenItemsSort('Pantry')}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default KitchenItemList;
