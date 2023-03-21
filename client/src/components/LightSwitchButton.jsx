import React from "react";

function LightSwitchButton(props){
  
  const {light, switchLight} = props;

  const handleClick = () => switchLight();

  return (
    <div>
      <label className="switch">
        <input onClick={handleClick} className="LightSwitchButton" type="checkbox"/>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default LightSwitchButton;