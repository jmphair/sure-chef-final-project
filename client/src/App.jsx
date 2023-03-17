import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  console.log('hi')
  axios
    .get("http://localhost:8080/users")
    .then((response) => {
      console.log(response.data.users);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
