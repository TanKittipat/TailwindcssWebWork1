import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-4" id="cards">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              img={restaurant.img}
              title={restaurant.title}
              desc={restaurant.desc}
            />
          );
        })}
    </div>
  );
};

export default Restaurant;
