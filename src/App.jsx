import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Diet from "./components/Diet";
import LifestyleAssistant from "./components/LifestyleAssistant";
import Prescription from "./components/Prescription";

const App = () => {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/diet" element={<Diet></Diet>} />
          <Route path="/AI-assistant" element={<LifestyleAssistant></LifestyleAssistant>} />
        </Routes>
      </Router> */}
      <Prescription></Prescription>
    </>
  );
}

export default App;
