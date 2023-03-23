import KitchenItem from "./KitchenItem";
import { Container, CardGroup, Accordion, Button } from "react-bootstrap";
import RecipeGenerator from "../RecipeGenerator";
import KitchenForm from "./KitchenForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const KitchenItemList = (props) => {
  const kitchenItemsSort = (storageLocation) => {
    const kitchenItemList = props.userKitchenItems.map((kitchenItem) => {
      if (storageLocation === kitchenItem.storage_location) {
        return (
          <KitchenItem
            key={kitchenItem.id}
            id={kitchenItem.id}
            name={kitchenItem.name}
            quantity={kitchenItem.quantity}
            onDelete={props.onDelete}
            showOnEdit={props.showOnEdit}
            user={props.user}
          />
        );
      }
    });
    return kitchenItemList;
  };

  return (
    <Container className="my-3">
      <h3
        className="my-3"
        style={{
          textDecoration: "underline",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        My Kitchen
      </h3>
      {props.showForm ? (
        <div className="kitchen-main" style={{ marginBottom: "20px" }}>
          <KitchenForm
            user={props.user}
            showOnAdd={props.showOnAdd}
            handleAddItem={props.handleAddItem}
            onClick={props.handleAddItem}
          />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Button variant="outline-dark" onClick={props.handleAddItem}>
            Add New Item
          </Button>
        </div>

        // ADD ICON IF WE WANT INSTEAD OF BUTTON

        // <div style={{ textAlign: "center" }}>
        //   <FontAwesomeIcon
        //     icon={faCirclePlus}
        //     size="3x"
        //     style={{ "--fa-secondary-color": "#3d81f5" }}
        //     onClick={props.handleAddItem}
        //   />
        // </div>
      )}

      {/* hide recipe generator button when add item form is opened */}
      {!props.showForm && (
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <RecipeGenerator />
        </div>
      )}

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Refrigerator</Accordion.Header>
          <Accordion.Body>{kitchenItemsSort("Refrigerator")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Freezer</Accordion.Header>
          <Accordion.Body>{kitchenItemsSort("Freezer")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Pantry</Accordion.Header>
          <Accordion.Body>{kitchenItemsSort("Pantry")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Other</Accordion.Header>
          <Accordion.Body>{kitchenItemsSort("Other")}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default KitchenItemList;
