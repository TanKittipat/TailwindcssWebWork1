import React from "react";
import Title from "./Title";
import Search from "./Search";

const NavbarTwo = () => {
  return (
    <div>
      <div className="navbar bg-base-100 h-24 shadow-md mb-12">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-3xl">
            <span className="text-emerald-700">Grab</span> Restaurants
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base hover:text-emerald-700" href="/add">
                Add Restaurant
              </a>
            </li>
            {/* <li>
              <Search />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
