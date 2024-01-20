import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import ReataurantCard from "./ReataurantCard";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { token } = useContext(AuthContext);

  console.log(token);

  useEffect(() => {
    if (restaurants.length === 0) {
      axios({
        method: "GET",
        url: "https://staging.fastor.in/v1/m/restaurant?city_id=118",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data);
          setRestaurants(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [restaurants.length, token]);

  return (
    <div className="rest-container">
      <p>Popular Ones</p>
      <div className="main-container">
        {restaurants.length !== 0 &&
          restaurants.map((el) => (
            <ReataurantCard key={el.restaurant_id} {...el} />
          ))}
      </div>
    </div>
  );
};

export default Restaurants;
