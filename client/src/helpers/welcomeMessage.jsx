export function welcomeMessage(name) {
  const now = new Date()
  const hours = now.getHours()
  if (hours >= 5 && hours <= 11) {
    return <div className="greeting"><h4>Good morning {name}!</h4><h5>What's for breakfast?</h5></div>
  }
  if (hours >= 11 && hours <= 14) {
    return <div className="greeting"><h4>Hey {name}!</h4><h5>Ready for lunch?</h5></div>
  }
  if (hours >=  16 && hours <= 21) {
    return <div className="greeting"><h4>Good evening {name}!</h4><h5>Need help picking dinner?</h5></div>
  }
  return <div className="greeting"><h4>Hi {name}!</h4><h5>Looking to make a snack?</h5></div>
};