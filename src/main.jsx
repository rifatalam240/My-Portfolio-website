import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-sans">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>
);