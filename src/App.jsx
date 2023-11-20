import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Saved from "./Pages/Saved/Saved";
import Compare from "./Pages/Compare/Compare";
import { HousesProvider } from "./contexts/HousesContext";
import Recommendations from "./Pages/Recommendations/Recommendations";
import Feedback from "./Pages/Feedback/Feedback";
import View from "./Pages/View/View";
function App() {
  return (
    <div>
      <HousesProvider>
        <HashRouter>
          <Routes>
            <Route index path="/" element={<Login />}></Route>

            <Route index path="/home" element={<Home />}></Route>
            <Route path="/compare" element={<Compare />}></Route>
            <Route path="/saved" element={<Saved />}></Route>
            <Route path="view/:houseId" element={<View />} />
            <Route
              path="/recommendations"
              element={<Recommendations />}
            ></Route>
            {/* <Route path="/feedback" element={<Feedback />}></Route> */}
          </Routes>
        </HashRouter>
      </HousesProvider>
    </div>
  );
}

export default App;
