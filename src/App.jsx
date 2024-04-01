import React from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Diet from "./components/Diet";
import LifestyleAssistant from "./components/LifestyleAssistant";
import Prescription from "./components/Prescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/diet",
    element: <Diet/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/lifestyle",
    element: <LifestyleAssistant/>
  },
  {
    path: "/prescription",
    element: <Prescription />
  }
    
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
