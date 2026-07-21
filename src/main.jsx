import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";

import "./styles/global.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
