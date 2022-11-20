import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { NotFound404 } from "./pages/404";
import "./index.css";

const routes = [
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/404",
    element: <NotFound404 />,
  },
];

const router = createBrowserRouter(routes, {});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
