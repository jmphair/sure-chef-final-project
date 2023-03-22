import useLightSwitch from "../hooks/useLightSwitch";

function LightSwitchButton(props){

  const { dark, handleClick } = useLightSwitch();

  return (
    <div>
      <div className="app">
        <div className={`app ${dark}`}>
          <label className="switch">
            <input onClick={handleClick} className="LightSwitchButton" type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default LightSwitchButton;