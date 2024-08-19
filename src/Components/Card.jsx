import React from "react";
import Swal from "sweetalert2";
import RestaurantService from "../Services/restaurant.service";
import { useAuthContext } from "../Context/AuthContext";

const Card = ({ id, imgUrl, name, type }) => {
  const { user } = useAuthContext();

  const handleDelete = async (id) => {
    try {
      const response = await RestaurantService.deleteRestaurant(id);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Restaurant Delete`,
          text: response.data.message,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Restaurant Delete`,
        text: error?.response?.data?.message,
        timer: 1500,
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl m-3 w-72 h-96" id="card">
      <figure>
        <img src={imgUrl} alt="" className="rounded w-72 h-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{name}</h2>
        <p className="text-sm">{type}</p>
        {user &&
          (user.roles.includes("ROLES_MODERATOR") ||
            user.roles.includes("ROLES_ADMIN")) && (
            <div className="card-actions justify-center">
              <a
                href={`/edit/${id}`}
                className="btn btn-outline btn-warning btn-sm"
              >
                แก้ไขร้าน
              </a>
              {user.roles.includes("ROLES_ADMIN") && (
                <button
                  className="btn btn-outline btn-error btn-sm"
                  onClick={() => handleDelete(id)}
                >
                  ลบร้าน
                </button>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default Card;
