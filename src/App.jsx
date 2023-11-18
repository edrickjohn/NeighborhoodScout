import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Login />}></Route>
          <Route index path="/home" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
