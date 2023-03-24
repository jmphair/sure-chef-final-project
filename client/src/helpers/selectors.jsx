/* get all the recipes that belong to a specific user */
export function getRecipesForUsers(state, user_id) {
  const recipes = state.recipes.filter(
    (recipe) => recipe.user_id === user_id && recipe.saved === true
  );
  return recipes;
}

/* -------------------------------------------------------------------------- */

export function getNewRecipeForUsers(state, user_id) {
  const newRecipe = state.recipes.filter(
    (recipe) => recipe.user_id === user_id && recipe.saved !== true
  );
  return newRecipe;
}

/* -------------------------------------------------------------------------- */

export function getKitchenItemsForUsers(state, user_id) {
  const kitchenItems = state.kitchenItems.filter(
    (kitchenItem) => kitchenItem.user_id === user_id
  );
  return kitchenItems;
}

/* -------------------------------------------------------------------------- */

export function getGroceryItemsForUsers(state, user_id) {
  const groceryItems = state.groceryItems.filter(
    (groceryItems) => groceryItems.user_id === user_id
  );
  return groceryItems;
}

/* -------------------------------------------------------------------------- */

/* check for empty fields in form components */
export function validateForm(name, quantity, storageLocation) {
  const errors = {};

  if (!name) {
    errors.name = true;
  }
  if (!quantity) {
    errors.quantity = true;
  }
  if (!storageLocation) {
    errors.storageLocation = true;
  }
  return Object.keys(errors).length ? errors : null;
}
