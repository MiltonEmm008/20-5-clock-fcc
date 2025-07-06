// src/main.jsx (o .tsx)
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.scss";
import TimeProvider from "./context/TimeProvider.jsx";

ReactDOM.render(
  <TimeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TimeProvider>,
  document.getElementById("root")
);
