import React from "react";
import Title from "./Title";
import Search from "./Search";
import UserProfile from "./UserProfile";
import LoginBtn from "./LoginBtn";
import RegisterBtn from "./RegisterBtn";
import { useAuthContext } from "../Context/AuthContext";

const NavbarTwo = () => {
  const { user, logout } = useAuthContext();
  console.log("user", user);
  return (
    <div>
      <div className="navbar bg-base-100 h-24 shadow-md mb-12">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost text-3xl">
            <span className="text-emerald-700">Grab</span> Restaurants
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base hover:text-emerald-700" href="/add">
                Add Restaurant
              </a>
            </li>
          </ul>
          {user ? (
            <UserProfile logout={logout} />
          ) : (
            <div className="space-x-2 flex">
              <RegisterBtn />
              <LoginBtn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
