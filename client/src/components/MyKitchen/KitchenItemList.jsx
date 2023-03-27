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
import spices from "../../assets/spices.png";

import "./styles.css";

const KitchenItemList = (props) => {
  const [show, setShow] = useState(true);
  const {
    recipeIngredients,
    generateRecipe,
    addIngredient,
    removeIngredient,
    loading,
    answer,
  } = recipeGenerator();

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
              className="accordion-item"
            />
          );
        }
      })
      .reverse();
    return kitchenItemList;
  };

  const count = props.userKitchenItems.length;

  const displaySelected = () => {
    let prompt = "No ingredients selected  ";
    if (recipeIngredients[0]) {
      prompt = "Make me a recipe with ";
    }
    recipeIngredients.forEach((ingredient) => {
      prompt += Object.keys(ingredient)[0];
      prompt += ", ";
    });
    prompt = prompt.slice(0, -2);
    prompt += ".";
    return prompt;
  };

  return (
    <>
      <img
        src={spices}
        className="spices"
        // style={{ width: "115px", height: "115px" }}
      />
      <Container className="kitchen-container">
        <h3 className="heading">My Kitchen</h3>
        <h6 className="heading">Total Ingredients: {count}</h6>
        {/* hide recipe generator button when add item form is opened */}
        {!props.showForm && (
          <>
            <div style={{ marginTop: "20px" }}>
              <RecipeGenerator
                generateRecipe={generateRecipe}
                user={props.user}
              />
            </div>
            <div className="cart">
              <strong>Recipe ingredients</strong>
              <div>
                <em>{displaySelected()}</em>
              </div>
            </div>
          </>
        )}
        {loading && (
          <Modal show={true} centered>
            <div className="header-container">
              <Modal.Header className="header-text">
                <h4>Sure Chef! I'm cookin' something up!</h4>
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
            <Button
              className="button"
              variant="outline-dark"
              onClick={props.handleAddItem}
            >
              Add New Item
            </Button>
          </div>
        )}

        <Accordion alwaysOpen flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Refrigerator</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{kitchenItemsSort("Refrigerator")}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Freezer</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{kitchenItemsSort("Freezer")}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Pantry</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{kitchenItemsSort("Pantry")}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Other</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{kitchenItemsSort("Other")}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default KitchenItemList;
