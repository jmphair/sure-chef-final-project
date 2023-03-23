import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Userfront from "@userfront/react";
import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function RequireAuth({ children }) {
  const [activeSection, setActiveSection] = useState("login")

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return (
      <>
        <h1>SureChef</h1>
        {activeSection === 'login' && (
        <Container >  
          <Login />
          <div className="d-grid gap-2">
            <button className="login-button" onClick={() => handleSectionClick("signup")}>
                  Sign up
            </button>
          </div>
        </Container>)}
        {activeSection === 'signup' && (
          <Container>
            <Signup />
            <div className="d-grid gap-2">
            <Button onClick={() => handleSectionClick("login")} variant="primary" size="lg">
                  Login
            </Button>
          </div>
          </Container>
        )}
      </>);
  }

  return children;
}

//send user.id to database requests after auth

function App() {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: ''
  });
  
  //runs a GET request to get the logged in user data from 3rd part auth userFront
  useEffect(() => {
    const options = {
      headers: { 
        Accept: "*/*",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`
      }
    };

    axios.get("https://api.userfront.com/v0/self", options)
      .then((response) => {
        //adds new users to database and saves username state client side
        axios.post("/api/users", {
          id: response.data.userId,
          name: response.data.name,
          email: response.data.email,
          })
        setUser({
          id: response.data.userId,
          name: response.data.name,
          email: response.data.email,
        });
        })
      .catch((err) => console.error(err));
  }, [])

  return (
    <main className="App">
      <RequireAuth>
        <Dashboard user={user} />
      </RequireAuth>
    </main>
  );
}

export default App;
