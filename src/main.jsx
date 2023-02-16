import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./components/layout/Layout";
import { CurrentUserContext } from "./context/UserContext";
import About from "./Pages/about/About";
import "./styles/index.module.scss";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentUserContext>
      <RouterProvider router={router} />
    </CurrentUserContext>
  </React.StrictMode>
);
