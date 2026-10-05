import { useState } from "react";

const App = () => {
  //! Step 1:- State setup
  const [isDark, setIsDark] = useState(false);

  //! Step 2:- Function to toggle the state
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  //! Step 3:- Define the styles for light and dark mode
  const lightStyle = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const darkStyle = {
    backgroundColor: "#1a1a1a",
    color: "#f9f9f9",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={isDark ? darkStyle : lightStyle}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>

      <p>This is the basic demo of dark & light mode</p>

      <button onClick={toggleTheme}>
        Switch To {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default App;