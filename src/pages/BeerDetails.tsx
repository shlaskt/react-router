// src/pages/BeerDetails.tsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Beer } from "./Products";

const BeerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("🚀 ~ id:", id)
  const location = useLocation();
  const beer: Beer = location.state.beer;

  return (
    <div>
      <h1>Beer Details</h1>
      <p>Name: {beer.name}</p>
      <p>Price {beer.price}</p>
      <img alt="beer" src={beer.image}></img> <br/>
    </div>
  );
};

export default BeerDetails;
