import "./App.css";
import React, { useState } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Error from "./components/Error";
import { Routes, Route, } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("Light");
  const [alert, setalert] = useState(null);

  const showAlert = (Message) => {
    setalert({
      msg: Message,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "Light") {
      setMode("Dark");
      document.body.style.backgroundColor = "#0f1238";
      showAlert("Dark mode enabled!");
    } else {
      setMode("Light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled!");
    }
  };
  return (
    <>
        <Navbar mode={Mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm mode={Mode} toggle={toggleMode} showAlert={showAlert} />}/>
          <Route path="/Contact" element={<Contact mode={Mode} showAlert={showAlert}/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </>
  );
}

export default App;
