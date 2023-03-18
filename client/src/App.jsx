import { useState } from "react";
import "./App.css";
//import axios from "axios";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import Userfront from "@userfront/react";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import MyKitchen from "./components/MyKitchen"

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
      <MyKitchen />
      <Homepage />
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
