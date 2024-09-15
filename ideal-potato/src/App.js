import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Counter from "./components/Counter";
import PropDrilling from "./components/PropDrilling";
import Show from "./components/Show";
import Context from "./components/Context";
import NameDisplay from "./components/Name";
import Hobby from "./components/Hobbys";
import Email from "./components/Email";
import Button from "./components/Button";

function App() {
  //const [show, setShow] = useState(true);

  //const toggleShow = () => setShow((prevShow) => !prevShow);

  return (
    <>
      <NameDisplay />
      <Hobby></Hobby>
      <Email></Email>
      <Button></Button>
    </>
  );
}

export default App;
