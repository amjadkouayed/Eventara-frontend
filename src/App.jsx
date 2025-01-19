import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./global.css";
import LandingPage from "./pages/landing.jsx";
import LoginPage from "./pages/auth-pages/login-page.jsx";
import RegisterPage from "./pages/auth-pages/register-page.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
