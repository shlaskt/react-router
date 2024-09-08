import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Beer Store!</h1>
      <p>Discover the finest beers we have to offer.</p>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
      </nav>
    </div>
  );
};

export default Home;
