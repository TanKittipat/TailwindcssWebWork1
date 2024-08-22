import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RestaurantService from "../Services/restaurant.service";
import { useAuthContext } from "../Context/AuthContext";

const AddPage = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    if (
      !user ||
      (user &&
        !(
          user.roles.includes("ROLES_MODERATOR") ||
          user.roles.includes("ROLES_ADMIN")
        ))
    ) {
      navigate("/");
    }
  }, [user]);
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imgUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setRestaurant({ ...restaurant, [name]: value });
  };
  const handSubmit = async () => {
    try {
      const response = await RestaurantService.addRestaurant(restaurant);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Restaurant Insert`,
          text: response.data.message,
          timer: 1500,
        }).then(() => {
          setRestaurant({ name: "", type: "", imgUrl: "" });
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Restaurant Insert`,
        text: error?.response?.data?.message,
        timer: 1500,
      });
    }
  };
  return (
    <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
      <div className="my-12">
        <h1 className="mb-8 text-2xl font-semibold text-center">
          <span className="text-emerald-700">Add</span> Page
        </h1>
        <label className="block w-80">
          <span className="block text-base font-medium text-slate-700">
            Image :
          </span>
          <input
            name="imgUrl"
            id="imgInput"
            type="text"
            placeholder="Input image link here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.imgUrl}
          />
        </label>
        {restaurant.imgUrl && (
          <div>
            <img src={restaurant.imgUrl} className="h-32 my-3" />
          </div>
        )}
        <label className="block w-80">
          <span className="block text-base font-medium text-slate-700">
            Title :
          </span>
          <input
            name="name"
            id="titleInput"
            type="text"
            placeholder="Input title here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.name}
            required
          />
        </label>
        <label className="block w-80">
          <span className="block text-base font-medium text-slate-700">
            Type :
          </span>
          <input
            name="type"
            id="descInput"
            type="text"
            placeholder="Input type here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.type}
            required
          />
        </label>
        <button
          className="btn btn-outline btn-success my-10"
          onClick={handSubmit}
        >
          Add new restaurant
        </button>
      </div>
    </div>
  );
};

export default AddPage;
