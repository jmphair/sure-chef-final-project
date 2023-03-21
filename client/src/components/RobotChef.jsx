import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LightSwitchButton from './LightSwitchButton';
import useAiPrompt from '../hooks/useAiPrompt';

function RobotChef() {

  const [light, setLight] = useState("off");
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight((light === "on") ? "off" : "on");

  const { loading, answer, sendPrompt, updatePrompt } = useAiPrompt();

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

