// src/pages/Products.tsx
import React from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { Paths, routeMap } from "../utils";

type Beer = {
  price: string;
  name: string;
  rating: { average: number; reviews: number };
  image: string;
  id: number;
};

export const productsLoader = async () => {
  const response = await fetch("https://api.sampleapis.com/beers/ale");
  const beers = await response.json();
  return beers;
};

const Products: React.FC = () => {
  const beers = useLoaderData() as Beer[];

  const navigate = useNavigate();

  const goToBeerDetails = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <h1>Our Products</h1>
      <p>Explore our selection of exquisite beers.</p>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <button onClick={() => goToBeerDetails(beer.id)}>{beer.name}</button>
          </li>
        ))}
      </ul>

      <Outlet />

      <button onClick={() => navigate(routeMap[Paths.Home])}>Home</button>
    </div>
  );
};

export default Products;
