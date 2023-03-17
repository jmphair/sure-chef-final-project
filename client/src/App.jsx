import { useState } from "react";
import "./App.css";
//import axios from "axios";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(false);

  const isLoggedIn = () => {
    if (user) {
      return <Logout /> 
    }
    return <><Login /><Signup /></>
  }

  return (
    <div className="App">
      {isLoggedIn()}
    </div>
  );
}

// axios
//   .get("http://localhost:8080/users")
//   .then((response) => {
//     console.log(response.data.users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export default App;
