import { useState, useEffect } from "react";


export default function useLightSwitch() {

  const [light, setLight] = useState("off");
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight((light === "on") ? "off" : "on");

  const handleClick = () => switchLight();

  return { dark, handleClick }
}