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
        <button onClick={()=> navigate(routeMap[Paths.Contact], {state:{message:'We would like to hear from you!'}})}>Contact Us</button>
        <button onClick={()=> navigate(routeMap[Paths.Contact], {state:{message:'Something went wrong? Let us know!'}})}>Leave Feedback</button>
      </nav>
    </div>
  );
};

export default Home;
