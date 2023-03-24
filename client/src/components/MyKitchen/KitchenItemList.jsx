import { useState } from "react";
import KitchenItem from "./KitchenItem";
import {
  Container,
  CardGroup,
  Accordion,
  Button,
  Modal,
} from "react-bootstrap";
import RecipeGenerator from "../RecipeGenerator";
import KitchenForm from "./KitchenForm";
import recipeGenerator from "../../hooks/recipeGenerator";
import SaveRecipe from "../Recipe/SaveRecipe";
import LoadingRecipe from "./LoadingRecipe";
import useRecipeData from "../../hooks/useGroceryListItemData";
import { ingredientParser, instructionParser } from "../../helpers/dataParsers";

import "./styles.css";

const KitchenItemList = (props) => {
  const [show, setShow] = useState(true);
  const { generateRecipe, addIngredient, removeIngredient, loading, answer } =
    recipeGenerator();

  const handleClose = () => {
    setShow(false);
  };

  const kitchenItemsSort = (storageLocation) => {
    const kitchenItemList = props.userKitchenItems
      .map((kitchenItem) => {
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
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
            />
          );
        }
      })
      .reverse();
    return kitchenItemList;
  };

  const count = props.userKitchenItems.length;

  return (
    <Container>
      <h3 className="heading">My Kitchen</h3>
      <h6 className="heading">Total Ingredients: {count}</h6>
      {/* hide recipe generator button when add item form is opened */}
      {!props.showForm && (
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <RecipeGenerator generateRecipe={generateRecipe} user={props.user} />
        </div>
      )}
      {loading && (
        <Modal show={true} style={{ marginTop: "0px" }}>
          <div className="header-container">
            <Modal.Header className="header-text">
              Cookin' something up!
            </Modal.Header>
          </div>
          <Modal.Body style={{ height: "100vh" }}>
            <LoadingRecipe />
          </Modal.Body>
        </Modal>
      )}
      {answer && props.handleSectionClick("saverecipe")}

      {props.showForm ? (
        <div className="kitchen-main">
          <KitchenForm
            user={props.user}
            showOnAdd={props.showOnAdd}
            handleAddItem={props.handleAddItem}
            onClick={props.handleAddItem}
          />
        </div>
      ) : (
        <div className="add-button">
          <Button variant="outline-dark" onClick={props.handleAddItem}>
            Add New Item
          </Button>
        </div>
      )}

      <Accordion alwaysOpen flush>
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
