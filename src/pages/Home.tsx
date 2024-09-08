import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths, routeMap } from '../utils';

const Home: React.FC = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Our Beer Store!</h1>
      <p>Discover the finest beers we have to offer.</p>
      <nav>
        <button onClick={()=> navigate(routeMap[Paths.Home])}>Home</button>
        <button onClick={()=> navigate(routeMap[Paths.About])}>About Us</button>
        <button onClick={()=> navigate(routeMap[Paths.Products])}>Beers</button>
      </nav>
    </div>
  );
};

export default Home;
