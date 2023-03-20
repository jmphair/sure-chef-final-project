/* function to get all the recipes that belong to a specific user */
export function getRecipesForUsers(state, user_id) {
  const recipes = state.recipes.filter((recipe) => recipe.user_id === user_id);
  return recipes;
}











export function getFoodItemsForUsers(state, user_id) {
  const foodItems = state.foodItems.filter((foodItem) => foodItem.user_id === user_id);
  return foodItems;
}