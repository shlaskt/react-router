import React from "react";
import { Outlet, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { Paths, routeMap } from "../utils";
import "./Products.css";

export type Beer = {
  price: string;
  name: string;
  rating: { average: number; reviews: number };
  image: string;
  id: number;
};

export const productsLoader = async () => {
  const [response, _] = await Promise.all([
    fetch("https://api.sampleapis.com/beers/ale"),
    new Promise(resolve => setTimeout(resolve, 3000))]);
  const beers = await response.json();
  return beers;
};

const Products: React.FC = () => {
  const beers = useLoaderData() as Beer[];
  const navigate = useNavigate();
  const navigation = useNavigation(); 

  const goToBeerDetails = (beer: Beer) => {
    navigate(`/products/${beer.id}`, { state: { beer } });
  };

  return navigation.state === "loading" ? <div>Loading</div> : (
    <div>
      <h1>Our Products</h1>
      <p>Explore our selection of exquisite beers.</p>

      <div className="products-container">
        <div className="beer-list">
          <ul>
            {beers.map((beer) => (
              <li key={beer.id}>
                <button onClick={() => goToBeerDetails(beer)}>
                  {beer.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="beer-details">
          <Outlet />
        </div>
      </div>

      <button onClick={() => navigate(routeMap[Paths.Home])}>Home</button>
    </div>
  );
};

export default Products;
