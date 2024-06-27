import { useEffect, useState } from "react";
import Restaurant from "./Components/Restaurant";
import Search from "./Components/Search";
import Title from "./Components/Title";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setFilteredRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container mx-auto my-5">
      <Title />
      <Search restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
      <Restaurant restaurants={filteredRestaurants} />
    </div>
  );
}
