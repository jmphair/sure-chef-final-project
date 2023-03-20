import KitchenItem from "./KitchenItem";
import { Container, CardGroup } from "react-bootstrap";

import { getKitchenItemsForUsers } from "../../helpers/selectors";
import useKitchenListItemData from "../../hooks/useKitchenListItemData";

const KitchenItemList = () => {
  console.log("DO I EXIST IN KitchenItemList COMPONENT");

  const { kitchenItems, currentKitchenItem } = useKitchenListItemData();

  const userKitchenItems =
    kitchenItems.length > 0 ? getKitchenItemsForUsers({ kitchenItems }, 1) : [];

  const kitchenItemList = userKitchenItems.map((kitchenItem) => {
    console.log("KITCHEN ITEM: ", kitchenItem);
    return (
      <KitchenItem name={kitchenItem.name} quantity={kitchenItem.quantity} />
    );
  });

  return (
    <Container className="my-3">
      <h3 className="my-3">My Kitchen:</h3>
      <CardGroup>
        <>
          {kitchenItemList}
          {console.log("tell my whyyyyyy")}
        </>
      </CardGroup>
    </Container>
  );
};

export default KitchenItemList;
