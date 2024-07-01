import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    title: "",
    desc: "",
    img: "",
  });
  useEffect(() => {
    fetch("http://localhost:5000/restaurants/" + id)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setRestaurant({ ...restaurant, [name]: value });
  };
  const handSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant updated!");
        setRestaurant({
          title: "",
          desc: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
      <div className="my-12">
        <h1 className="mb-8 text-2xl font-semibold text-center">
          <span className="text-amber-500">Edit</span> Page
        </h1>
        <label className="block w-80">
          <span className="block text-base font-medium text-slate-700">
            Image :
          </span>
          <input
            name="img"
            id="imgInput"
            type="text"
            placeholder="Input image link here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        {restaurant.img && (
          <div>
            <img src={restaurant.img} className="h-32 my-3" />
          </div>
        )}
        <label className="block w-80">
          <span className="block text-base font-medium text-slate-700">
            Title :
          </span>
          <input
            name="title"
            id="titleInput"
            type="text"
            placeholder="Input title here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.title}
          />
        </label>
        <label className="block w-80">
          <span className="block text-base font-medium text-slate-700">
            Type :
          </span>
          <input
            name="desc"
            id="descInput"
            type="text"
            placeholder="Input type here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.desc}
          />
        </label>
        <button
          className="btn btn-outline btn-warning my-10"
          onClick={handSubmit}
        >
          Edit restaurant
        </button>
      </div>
    </div>
  );
};

export default Edit;
