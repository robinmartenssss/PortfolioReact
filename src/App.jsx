import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Projectdetail from "./Pages/Projectdetail/Projectdetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectdetail/:projectId" element={<Projectdetail />} />
      </Routes>
    </Router>
  );
}

export default App;
