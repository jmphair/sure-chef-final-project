import { Form } from "react-bootstrap";
import useLightSwitch from "../hooks/useLightSwitch";

function LightSwitchButton(props){

  const { dark, handleClick } = useLightSwitch();

  return (
    <div>
      <div className="app">
        <div className={`app ${dark}`}>
          <Form.Check
            type="switch"
            id="custom-switch"
          />
        </div>
      </div>
    </div>
  );
}

export default LightSwitchButton;