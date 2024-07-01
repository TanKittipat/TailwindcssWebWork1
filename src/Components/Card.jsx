import React from "react";

const Card = ({ id, img, title, desc }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert(`Restaurant id : ${id} is Deleted!`);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl m-3 w-72 h-96" id="card">
      <figure>
        <img src={img} alt="" className="rounded w-72 h-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{title}</h2>
        <p className="text-sm">{desc}</p>
        <div className="card-actions justify-center">
          <a
            href={`/edit/${id}`}
            className="btn btn-outline btn-warning btn-sm"
          >
            แก้ไขร้าน
          </a>
          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={() => handleDelete(id)}
          >
            ลบร้าน
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
