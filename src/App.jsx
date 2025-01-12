// Import React
import React from "react";

// Import all components
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import SearchAndCreateNewEvent from "./components/SearchAndCreateNewEvent";
import MainContent from "./components/MainContent";

// Main App component
const App = () => {
  return (
    <div style={styles.app}>
      <Navbar />

      <div style={styles.body}>
        <Sidebar />

        <div style={styles.main}>
          <SearchAndCreateNewEvent />
          
          <MainContent />
        </div>
      </div>
    </div>
  );
};

// Inline styles for the app
const styles = {
  app: { fontFamily: "Arial, sans-serif" }, // Use a clean font
  body: { display: "flex" },               // Flexbox for layout
  main: { flex: 1, padding: "20px" },      // Main section with padding
};

// Export App component
export default App;