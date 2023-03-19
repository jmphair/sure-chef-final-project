import { useState } from "react";
import "./App.css";
import axios from "axios";
// import { BrowserRouter as Router, Routes, Route, Link , useLocation, Navigate} from "react-router-dom";
import Userfront from "@userfront/react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";

function RequireAuth({ children }) {
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return (
      <>
        <Login />
        <Signup />
        <PasswordReset />
      </>);
  }

  return children;
}

//send user.id to database requests after auth

function App() {
  const [user, setUser] = useState(null);

  
  //runs a GET request to get the logged in user data from 3rd part auth userFront
  const addUserData = () => {
    const options = {
      headers: { 
        Accept: "*/*",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`
      }
    };

    axios.get("https://api.userfront.com/v0/self", options)
      .then((response) => {
        //adds new users to database and saves username state client side
        axios.put("http://localhost:8080/users", {
          id: response.data.userId,
          name: response.data.name,
          email: response.data.email,
          })
          setUser(response.data.name);
        })
      .catch((err) => console.error(err));
  }
  
  addUserData()
  return (
    <main className="App">
      <RequireAuth>
        <Dashboard user={user} />
        <Logout />
      </RequireAuth>
    </main>
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
