import React, { useEffect, useState } from "react";
import Restaurant from "../Components/Restaurant";
import Search from "../Components/Search";
import RestaurantService from "../Services/restaurant.service";
import Swal from "sweetalert2";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await RestaurantService.getAllRestaurant();
        if (response.status === 200) {
          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Get all Restaurant",
          text: error?.response?.data?.message || error.message,
          timer: 1500,
        });
      }
    };
    getRestaurants();
  }, []);

  return (
    <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
      <Search
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <Restaurant restaurants={filteredRestaurants} />
    </div>
  );
}
