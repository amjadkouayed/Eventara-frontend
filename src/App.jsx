import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./global.css";
import LandingPage from "./pages/landing.jsx";
import Login from "./pages/auth-pages/login.jsx";
import SignUp from "./pages/auth-pages/register.jsx";

// Import Pages
import EventBoard from './pages/EventBoard'
import CreateEvent from './pages/CreateEvent'
import EventInfo from './pages/EventInfo'
import InvitationFlyers from './pages/InvitationFlyers'
import Guestlist from './pages/Guestlist'
import Vendors from './pages/Vendors'
import Budgeting from './pages/Budgeting'
import GeneralSettings from './pages/GeneralSettings'

// Import Components
import Header from './components/Header'
import Sidebar from "./components/SideBar"
import './styles/App.css'

// Main App component
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <div className="main-content">
            <Routes>
              {/* need to edit in the future */} 
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route path="/event-board" element={<EventBoard />} />
              <Route path="/create-event" element={<CreateEvent />} />
              <Route path="/event-info" element={<EventInfo />} />
              <Route path="/invitation-flyers" element={<InvitationFlyers />}></Route>
              <Route path="/guestlist" element={<Guestlist />}></Route>
              <Route path="/vendors" element={<Vendors />}></Route>
              <Route path="/budgeting" element={<Budgeting />}></Route>
              <Route path="/general-settings" element={<GeneralSettings />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;