import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <KindeProvider
  //   clientId="e6c97908b3354f908cbb29d937ba42cb"
  //   domain="https://kaya.kinde.com"
  //   redirectUri="http://localhost:5173"
  //   logoutUri="http://localhost:5173"
  // >
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  // </KindeProvider>
);
