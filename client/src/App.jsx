import { useState } from "react";
import "./App.css";
//import axios from "axios";

import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [user, setUser] = useState(true);

  return (
    <div className="App">
      {user ? <Logout /> : <Login />}
      <h1>Hello</h1>
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
