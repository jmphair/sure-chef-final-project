export function randomRecipePrompt() {
  const prompts = [' Finding inspiration...',
    ' One moment while we rummage through your kitchen...',
  ' Looking through your kitchen...',
  ' Checking your pantry...',
  ' Digging through your freezer...']

  return prompts[Math.floor(Math.random() * prompts.length)]
}