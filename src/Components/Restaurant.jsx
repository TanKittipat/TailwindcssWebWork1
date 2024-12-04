import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Restaurant = ({ restaurants }) => {
  return (
    <div className="container flex flex-wrap justify-center gap-4" id="cards">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={restaurant.imgUrl}
              name={restaurant.name}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};

export default Restaurant;
