import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import LandingPage from "./pages/landing.jsx";
import LoginPage from "./pages/auth-pages/login-page.jsx";
import RegisterPage from "./pages/auth-pages/register-page.jsx";

import EventBoard from "./pages/dashboard-pages/EventBoard.jsx";
import CreateEvent from "./pages/dashboard-pages/CreateEvent.jsx";
import EventInfo from "./pages/dashboard-pages/EventInfo.jsx";
import InvitationPage from "./pages/dashboard-pages/InvitationPage.jsx";
import Guestlist from "./pages/dashboard-pages/Guestlist.jsx";
import Vendors from "./pages/dashboard-pages/Vendors.jsx";
import Budgeting from "./pages/dashboard-pages/Budgeting.jsx";
import GeneralSettings from "./pages/dashboard-pages/GeneralSettings.jsx";

import DashboardLayout from "./pages/DashboardLayout";

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
          <Route path=":event_id/event-info" element={<EventInfo />} />
          <Route
            path=":event_id/invitation-Page"
            element={<InvitationPage />}
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
