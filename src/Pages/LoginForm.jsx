import React, { useEffect } from "react";
import { useState } from "react";
import AuthService from "../Services/auth.service";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const { login, user: loggedInUser } = useAuthContext();
  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser]);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const currentUser = await AuthService.login(
        user.username,
        user.userPassword
      );
      console.log(currentUser);
      if (currentUser.status === 200) {
        login(currentUser.data);
        Swal.fire({
          icon: "success",
          title: "User Login",
          text: "Login successfully!",
          timer: 1500,
        });
        setUser({ username: "", userPassword: "" });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "User Login",
        text: error?.response?.data?.message || error.message,
        timer: 1500,
      });
    }
  };

  const handleCancel = () => {
    setUser({ username: "", userPassword: "" });
    navigate("/");
  };

  return (
    <div className="container flex flex-row flex-wrap items-center justify-center mx-auto mb-60">
      <div className="my-12">
        <h1 className="mb-8 text-2xl font-semibold text-center">
          <span className="text-emerald-700">Sign in</span> Page
        </h1>{" "}
        <label className="input input-bordered flex items-center gap-2 my-5 w-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            onChange={handleChange}
            name="username"
            value={user.username}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-5 w-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            onChange={handleChange}
            name="userPassword"
            value={user.userPassword}
          />
        </label>
        <div className="flex mx-16 justify-between">
          {" "}
          <button className="btn btn-success w-20" onClick={handleSubmit}>
            Login
          </button>
          <button className="btn btn-error" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
