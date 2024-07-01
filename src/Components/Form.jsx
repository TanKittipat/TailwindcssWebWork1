import React from "react";

const Form = () => {
  return (
    <div className="my-12">
      <h1 className="mb-8 text-2xl font-semibold text-center">
        <span className="text-emerald-700">Add</span> Page
      </h1>
      <label className="block w-80">
        <span class="block text-base font-medium text-slate-700">Image :</span>
        <input
          id="imgInput"
          type="text"
          placeholder="Input image link here."
          className="input input-bordered w-full max-w-lg my-3"
        />
      </label>
      <label className="block w-80">
        <span class="block text-base font-medium text-slate-700">Title :</span>
        <input
          id="titleInput"
          type="text"
          placeholder="Input title here."
          className="input input-bordered w-full max-w-lg my-3"
        />
      </label>
      <label className="block w-80">
        <span class="block text-base font-medium text-slate-700">Type :</span>
        <select
          className="select select-bordered w-full max-w-lg my-3"
          id="descSelect"
        >
          <option disabled selected>
            Select type here.
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </label>
      <button className="btn btn-outline btn-success my-10">
        Add new restaurant
      </button>
    </div>
  );
};

export default Form;
