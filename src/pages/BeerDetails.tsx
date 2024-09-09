// src/pages/BeerDetails.tsx
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { routeMap, Paths } from "../utils";
import { Beer } from "./Products";

const BeerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const beer: Beer = location.state.beer;
  const navigate = useNavigate();

  return (
    <div>
      <h1>Beer Details</h1>
      <p>Name: {beer.name}</p>
      <p>Price {beer.price}</p>
      <img alt="beer" src={beer.image}></img> <br/>
      <button onClick={() => navigate(routeMap[Paths.Products])}>
        Back to Products
      </button>
    </div>
  );
};

export default BeerDetails;
