import React from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-3" id="card">
      <figure>
        <img src={img} alt="" className="rounded" />
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
