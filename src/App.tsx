// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Paths, routeMap } from "./utils";
import BeerDetails from "./pages/BeerDetails";
import Products, { productsLoader } from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: routeMap[Paths.Home], element: <Home /> },
  { path: routeMap[Paths.About], element: <AboutUs /> },
  {
    path: routeMap[Paths.Products],
    element: <Products />,
    loader: productsLoader,
    children: [
      {
        path: routeMap[Paths.ProductDetails],
        element: <BeerDetails />,
        children: [
          { path: routeMap[Paths.Order], element: <Contact /> },
        ],
      },
    ],
  },
  { path: routeMap[Paths.Contact], element: <Contact /> },
  { path: routeMap[Paths.NotFound], element: <NotFound /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
