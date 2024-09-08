// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Paths, routeMap } from "./utils";

const router = createBrowserRouter([
  { path: routeMap[Paths.Home], element: <Home /> },
  { path: routeMap[Paths.About], element: <AboutUs /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
