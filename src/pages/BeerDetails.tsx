// src/pages/BeerDetails.tsx
import React from "react";
import { useParams, useLocation, useNavigate, Outlet } from "react-router-dom";
import { Beer } from "./Products";
import { routeMap, Paths } from "../utils";

const BeerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const beer: Beer = location.state.beer;

  return (
    <div>
      <h1>Beer Details</h1>
      <p>Name: {beer.name}</p>
      <p>Price {beer.price}</p>
      <img alt="beer" src={beer.image}></img> <br/>
      <button
          onClick={() =>
            navigate(`/products/${beer.id}/order`, {
              state: { message: `Order ${(beer.name).toUpperCase()} Now!`, beer },
            })
          }
        >
          Order
        </button>
        <Outlet/>
    </div>
  );
};

export default BeerDetails;
