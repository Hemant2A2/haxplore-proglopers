import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Diet from "./components/Diet";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/diet" element={<Diet></Diet>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
