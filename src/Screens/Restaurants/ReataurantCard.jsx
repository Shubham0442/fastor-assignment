import React from "react";
import "./index.css";
import { BiSolidOffer } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReataurantCard = ({
  restaurant_id,
  restaurant_name,
  avg_cost_for_two,
  rating,
  currency,
  location,
  images,
  cuisines
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/restaurants/${restaurant_id}`)}
    >
      <img src={images[0]?.url} />
      <div>
        <p className="name">{restaurant_name}</p>
        <p className="cuisine_name">{cuisines?.map((el) => el.cuisine_name)}</p>
        <p className="location">
          {location?.location_address_2 + ", " + location?.city_name}
        </p>
        <div className="offers">
          <BiSolidOffer />
          <p>Offers trending</p>
        </div>
        <div className="inner-box">
          <div className="rating">
            <div>
              <FaStar /> {rating?.restaurant_avg_rating}
            </div>
            <div className="rate-cost">Popularity</div>
          </div>
          <div className="cost">
            <div>
              {currency?.symbol}
              {avg_cost_for_two}
            </div>
            <div className="rate-cost">Cost for two</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReataurantCard;
