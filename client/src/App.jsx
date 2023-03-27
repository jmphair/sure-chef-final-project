import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Userfront from "@userfront/react";
import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

function RequireAuth({ children }) {
  const [activeSection, setActiveSection] = useState("landingpage")

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return (
      <Container className="app-container">
        <div className='landing-div'> 
        <h1 className='landing-hero'>
          <strong>SureChef</strong>
          </h1>
        {activeSection === 'landingpage' && (
        <div>
          <button className="login-button" onClick={() => handleSectionClick("login")}>
            Start Cooking!
          </button>  
          <LandingPage />
        </div>)}
        {activeSection === 'login' && (
        <div>  
          <Login />
            <button className="login-button" onClick={() => handleSectionClick("signup")}>
              Sign up
            </button>
        </div>)}
        {activeSection === 'signup' && (
          <div>
            <Signup />
            <button className="login-button" onClick={() => handleSectionClick("login")}>
              Log in
            </button>
          </div>
        )}
        </div>
      </Container>);
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
    <main className="app-container">
      <RequireAuth>
        <Dashboard user={user} />
      </RequireAuth>
    </main>
  );
}

export default App;
