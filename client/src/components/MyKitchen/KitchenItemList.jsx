import KitchenItem from "./KitchenItem";
import { Container, CardGroup } from "react-bootstrap";

import { getKitchenItemsForUsers } from "../../helpers/selectors";
import useKitchenListItemData from "../../hooks/useKitchenListItemData";

const KitchenItemList = () => {
  const { kitchenItems, currentKitchenItem, setKitchenItems } =
    useKitchenListItemData();

  const userKitchenItems =
    kitchenItems.length > 0
      ? getKitchenItemsForUsers({ kitchenItems }, 16)
      : [];

  /* function used in KitchenItem component to update the state after an item is deleted  */
  const handleDelete = (id) => {
    setKitchenItems((prev) => prev.filter((item) => item.id !== id));
  };

  const kitchenItemList = userKitchenItems.map((kitchenItem) => {
    return (
      <KitchenItem
        key={kitchenItem.id}
        id={kitchenItem.id}
        name={kitchenItem.name}
        quantity={kitchenItem.quantity}
        onDelete={handleDelete}
      />
    );
  });

  return (
    <Container className="my-3">
      <h3 className="my-3">My Kitchen:</h3>
      <CardGroup>
        <>{kitchenItemList}</>
      </CardGroup>
    </Container>
  );
};

export default KitchenItemList;
