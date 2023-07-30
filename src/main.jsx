import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./About.jsx";
import User from "./User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{path: "/user/:name", element: <User />}],
  },
  {path: "/about", element: <About />},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
