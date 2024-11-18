import React from "react";
import ReactDOM from "react-dom/client"; // Use React 18's new root API
import "./index.css"; // Optional: add global styles for your app
import App from "./App"; // Import your main App component

// Create the root and render the App component inside it
const rootElement = document.getElementById("root") as HTMLElement; // Get the root element from the HTML
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
