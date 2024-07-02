import "./App.css";
import { BrowserRouter, Route,Routes,  } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import React from 'react'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
