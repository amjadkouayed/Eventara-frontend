import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./styles/global.css";
import LandingPage from "./pages/landing.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/register.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
