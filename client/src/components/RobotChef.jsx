import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LightSwitchButton from './LightSwitchButton';
import axios from 'axios';

function RobotChef() {
  
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

  return (
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
  );
}

export default RobotChef;

