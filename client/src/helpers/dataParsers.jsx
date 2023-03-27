
export function ingredientParser(recipeIngredients) {
  let ingredients = ""

  recipeIngredients.forEach(ingredient => {
    ingredients += Object.keys(ingredient)[0] + ": "
    ingredients += Object.values(ingredient)[0] + ", "
  })

  ingredients = ingredients.slice(0, -2);

  return ingredients
}

export function instructionParser(recipeInstructions) {
  let instructions = ""
  recipeInstructions.forEach(instruction => {
    instructions += instruction + `\n`
  });

  instructions = instructions.slice(0, -2);

  return instructions
}