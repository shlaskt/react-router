import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Our Beer Store!</h1>
      <p>Discover the finest beers we have to offer.</p>
      <nav>
        <button onClick={()=> navigate("/")}>Home</button>
        <button onClick={()=> navigate("/about")}>About Us</button>
      </nav>
    </div>
  );
};

export default Home;
