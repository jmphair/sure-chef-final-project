import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Userfront from "@userfront/react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";
import LightSwitchButton from "./components/LightSwitchButton";
import { Container } from "react-bootstrap";

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
  
  // addUserData()

  /* ---------- OPENAI ---------- */

  const [prompt, updatePrompt] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(undefined);

  const [light, setLight] = useState("off");
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight((light === "on") ? "off" : "on");

  useEffect(() => {
    if (prompt != null && prompt.trim() === "") {
      setAnswer(undefined);
    }
  }, [prompt]);

  const sendPrompt = (event) => {
    if (event.key !== "Enter") {
      return Promise.resolve();
    }
  
    // setLoading(true);
  
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
  
    return axios
      .post("/api/openai/ask", { prompt }, requestOptions)
      .then((res) => {
        // if (!res) {
        //   throw new Error("Something went wrong");
        // }
        
        console.log(res);

        const { message } = res.data;
        setAnswer(message);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err, "err");
        setLoading(false);
      });
  };
  

  /* ---------------------------- */

  return (
    <main className="App">
      <RequireAuth>
        <Dashboard user={user} />
      </RequireAuth>
      <Container>
        <div className="app">
        <div className={`app ${dark}`}>
          <div className="app-container">
            <div className="spotlight_wrapper">
              <section>
                <LightSwitchButton light={light} switchLight={switchLight}/>
              </section>
            </div>
            <div className="spotlight__wrapper">
              <input
                type="text"
                className="spotlight__input"
                disabled={loading}
                onChange={(e) => updatePrompt(e.target.value)}
                onKeyDown={(e) => sendPrompt(e)}
              />
              <div className="spotlight__answer">{answer && <p>{answer}</p>}</div>          
            </div>
          </div>
        </div>
      </div>
      </Container>

    </main>
  );
}

export default App;
