import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { RouterProvider } from "react-router-dom";
import router from "./_routes/Router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>
);
