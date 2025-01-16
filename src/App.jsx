import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./global.css";
import LandingPage from "./pages/landing.jsx";
import Login from "./pages/auth-pages/login.jsx";
import SignUp from "./pages/auth-pages/register.jsx";

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
