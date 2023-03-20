import KitchenItem from "./KitchenItem";
import { Container, CardGroup } from "react-bootstrap";

import { getKitchenItemsForUsers } from "../../helpers/selectors";
import useKitchenListItemData from "../../hooks/useKitchenListItemData"

const KitchenItemList = () => {
  console.log("DO I EXIST IN KitchenItemList COMPONENT");

  const { kitchenItems, currentKitchenItem } = useKitchenListItemData();

  const userKitchenItems = kitchenItems.length > 0 ? getKitchenItemsForUsers({ kitchenItems }, 1) : [];

  const kitchenItemList = userKitchenItems.map((kitchenItem) => {
    return (
      <KitchenItem
        name={kitchenItem.name}
        quantity={kitchenItem.quantity}
      />
    );
  });

  return (
    <Container>
      {console.log('hey')}
      <div>My Kitchen:</div>
      <CardGroup>
        {kitchenItemList}
      </CardGroup>
    </Container>
  );
};

export default KitchenItemList;