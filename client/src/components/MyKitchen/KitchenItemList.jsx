import KitchenItem from "./KitchenItem";
import { Container, CardGroup } from "react-bootstrap";

import { getFoodItemsForUsers } from "../../helpers/selectors";
import useFoodItemData from "../../hooks/useFoodItemData.jsx"

const KitchenItemList = () => {
  const { foodItems, currentFoodItem } = useFoodItemData();

  const userFoodItems = foodItems.length > 0 ? getFoodItemsForUsers({ foodItems }, 1) : [];

  const foodItemList = userFoodItems.map((foodItem) => {
    return (
      <KitchenItem
        name={foodItem.name}
        quantity={foodItem.quantity}
      />
    );
  });

  return (
    <Container>
      {console.log('hey')}
      <div>My Kitchen:</div>
      <CardGroup>
        {foodItemList}
      </CardGroup>
    </Container>
  );
};

export default KitchenItemList;