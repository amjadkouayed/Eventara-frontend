import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import LandingPage from "./pages/landing.jsx";
import LoginPage from "./pages/auth-pages/login-page.jsx";
import RegisterPage from "./pages/auth-pages/register-page.jsx";

// Import Pages
import EventBoard from "./pages/dashboard-pages/EventBoard.jsx";
import CreateEvent from "./pages/dashboard-pages/CreateEvent.jsx";
import EventInfo from "./pages/dashboard-pages/EventInfo.jsx";
import InvitationFlyers from "./pages/dashboard-pages/InvitationFlyers.jsx";
import Guestlist from "./pages/dashboard-pages/Guestlist.jsx";
import Vendors from "./pages/dashboard-pages/Vendors.jsx";
import Budgeting from "./pages/dashboard-pages/Budgeting.jsx";
import GeneralSettings from "./pages/dashboard-pages/GeneralSettings.jsx";

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
          <Route path="general-settings" element={<GeneralSettings />} />
          <Route path=":eventId/event-info" element={<EventInfo />} />
          <Route
            path=":event_id/invitation-flyer"
            element={<InvitationFlyers />}
          />
          <Route path=":event_id/guestlist" element={<Guestlist />} />
          <Route path=":event_id/vendors" element={<Vendors />} />
          <Route path=":event_id/budgeting" element={<Budgeting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
