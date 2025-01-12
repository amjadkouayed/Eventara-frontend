// Import React
import React from "react";

// Import all components
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";

// Main App component
const App = () => {
  return (
    <div style={styles.app}>
      {/* Navbar at the top */}
      <Navbar />

      {/* Body layout */}
      <div style={styles.body}>
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content in the center */}
        <div style={styles.main}>
          {/* Search bar */}
          <SearchBar />

          {/* Main text content */}
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