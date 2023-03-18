import { useState } from "react";
import "./App.css";
import axios from "axios";
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

const getUserData = () => {
  const options = {
    headers: { 
      Accept: "*/*",
      Authorization: `Bearer ${Userfront.tokens.accessToken}`
    }
  };
  
  axios.get("https://api.userfront.com/v0/self", options)
    .then((response) => {
      console.log('user id: ', response.data.userId, 'user: ', response.data.email)
      console.log(response.data)
      axios.put("http://localhost:8080/users", {email: response.data.email})
      })
    .catch((err) => console.error(err));
  }

//send user.id to database requests after auth

function App() {

  return (
    <main className="App">
      <RequireAuth>
        <Dashboard />
        <Logout />
        {getUserData()}
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
