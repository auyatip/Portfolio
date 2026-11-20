import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
const root = document.getElementById("root");
if (!root) throw new Error("Root element is missing");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
