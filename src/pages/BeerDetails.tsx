// src/pages/BeerDetails.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { routeMap, Paths } from '../utils';

const BeerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Beer Details</h1>
      <p>Details about beer with ID: {id}</p>
      {/* Add more details or fetch from API */}
      <button onClick={() => navigate(routeMap[Paths.Products])}>Back to Products</button>
    </div>
  );
};

export default BeerDetails;
