import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import LandingPage from "./pages/landing.jsx";
import LoginPage from "./pages/auth-pages/login-page.jsx";
import RegisterPage from "./pages/auth-pages/register-page.jsx";

// Import Pages
import EventBoard from "./pages/EventBoard";
import CreateEvent from "./pages/CreateEvent";
import EventInfo from "./pages/EventInfo";
import InvitationFlyers from "./pages/InvitationFlyers";
import Guestlist from "./pages/Guestlist";
import Vendors from "./pages/Vendors";
import Budgeting from "./pages/Budgeting";
import GeneralSettings from "./pages/GeneralSettings";

// Import Components
import DashboardLayout from "./pages/DashboardLayout";
import "./styles/App.css";

// Main App component
const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />

        
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route path="event-board" element={<EventBoard />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="event-info" element={<EventInfo />} />
          <Route path="invitation-flyers" element={<InvitationFlyers />} />
          <Route path="guestlist" element={<Guestlist />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="budgeting" element={<Budgeting />} />
          <Route path="general-settings" element={<GeneralSettings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
