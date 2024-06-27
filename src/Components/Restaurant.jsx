import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Restaurant = ({ restaurants }) => {
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
