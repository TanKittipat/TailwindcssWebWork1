import React from "react";
import Title from "./Title";
import Search from "./Search";
import UserProfile from "./UserProfile";
import LoginBtn from "./LoginBtn";
import RegisterBtn from "./RegisterBtn";
import { useAuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  // อย่าลืมเพิ่ม role ให้ครบ เพราะถ้า user ที่ login มี role ที่ไม่มีขึ้นมาก่อนจะ error!!!
  const navMenu = {
    ROLES_ADMIN: [{ name: "Add Restaurant", link: "/add" }],
    ROLES_MODERATOR: [{ name: "Add Restaurant", link: "/add" }],
    ROLES_USER: [],
  };

  return (
    <div>
      <div className="navbar bg-base-100 h-24 shadow-md mb-12">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost text-3xl">
            <span className="text-emerald-700">Grab</span> Restaurants
          </a>
        </div>
        <div className="navbar-end space-x-2">
          <ul className="menu menu-horizontal px-1">
            {user &&
              navMenu[user.roles[0]].map((menuItem) => (
                <li key={menuItem.name}>
                  <a
                    className="text-base hover:text-emerald-700"
                    href={menuItem.link}
                  >
                    {menuItem.name}{" "}
                  </a>
                </li>
              ))}
          </ul>
          {user && (
            <div className="space-x-2 flex mr-2">
              Welcome, <span className="text-emerald-700">{user.username}</span>
              {user.roles.map((role, index) => {
                return (
                  <div key={index} className="badge badge-accent">
                    {role}
                  </div>
                );
              })}
            </div>
          )}
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

export default Navbar;
