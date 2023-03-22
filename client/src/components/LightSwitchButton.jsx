import { useState } from "react";

function LightSwitchButton(props){
  const [light, setLight] = useState("off");
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight((light === "on") ? "off" : "on");

  // const {light, switchLight} = props;

  const handleClick = () => switchLight();

  return (
    <div>
      <div className="app">
        <div className={`app ${dark}`}></div>
          <label className="switch">
            <input onClick={handleClick} className="LightSwitchButton" type="checkbox"/>
            <span className="slider round"></span>
          </label>
      </div>
    </div>
  );
}

export default LightSwitchButton;