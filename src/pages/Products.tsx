// src/pages/Products.tsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Paths, routeMap } from '../utils';

const Products: React.FC = () => {
  const navigate = useNavigate();

  const goToBeerDetails = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <h1>Our Products</h1>
      <p>Explore our selection of exquisite beers.</p>
      <ul>
        <li>
          <button onClick={() => goToBeerDetails("1")}>Beer 1</button>
        </li>
        <li>
          <button onClick={() => goToBeerDetails("2")}>Beer 2</button>
        </li>
        <li>
          <button onClick={() => goToBeerDetails("3")}>Beer 3</button>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Products;
