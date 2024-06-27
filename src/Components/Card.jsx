import React from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="card bg-base-100 shadow-xl m-3 w-72 h-96" id="card">
      <figure>
        <img src={img} alt="" className="rounded w-72 h-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{title}</h2>
        <p className="text-sm">{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-success btn-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
