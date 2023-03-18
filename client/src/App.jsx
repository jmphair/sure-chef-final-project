import { useState } from "react";
import "./App.css";
//import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link , useLocation, Navigate} from "react-router-dom";
import Userfront from "@userfront/react";

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

function App() {

  return (
    <div className="App">

          <RequireAuth>
            <Dashboard />
            <Logout />
          </RequireAuth>
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
