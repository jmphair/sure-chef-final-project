export function welcomeMessage(name) {
  const now = new Date()
  const hours = now.getHours()
  if (hours >= 5 && hours <= 11) {
    return `Good morning ${name}! What's for breakfast?`
  }
  if (hours >= 11 && hours <= 14) {
    return `Hi ${name}! Ready for lunch?`
  }
  if (hours >=  16 && hours <= 21) {
    return `Hi ${name}! Need help picking dinner?`
  }
  return `Hey ${name}! Looking to make a snack?`
};