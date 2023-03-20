import KitchenItem from "./KitchenItem";
import { Container, CardGroup } from "react-bootstrap";

import { getKitchenItemsForUsers } from "../../helpers/selectors";
import useKitchenListItemData from "../../hooks/useKitchenListItemData";

const KitchenItemList = () => {

  const { kitchenItems, currentKitchenItem } = useKitchenListItemData();

  const userKitchenItems =
    kitchenItems.length > 0 ? getKitchenItemsForUsers({ kitchenItems }, 1) : [];

  const kitchenItemList = userKitchenItems.map((kitchenItem) => {
    return (
      <KitchenItem key={kitchenItem.id} name={kitchenItem.name} quantity={kitchenItem.quantity} />
    );
  });

  return (
    <Container className="my-3">
      <h3 className="my-3">My Kitchen:</h3>
      <CardGroup>
        <>
          {kitchenItemList}
        </>
      </CardGroup>
    </Container>
  );
};

export default KitchenItemList;
