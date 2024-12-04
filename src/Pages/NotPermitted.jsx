import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotPermitted = () => {
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    const countDown = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(countDown);
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(countDown);
    };
  }, [navigate]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen top-0 fixed z-0">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Access <span className="text-red-800">denied!!!</span>
            </h1>
            <p className="pt-8">
              To access this page, you must log in with a higher level account.
            </p>
            <p className="pt-3 pb-6">
              You will be redirected to the homepage in{" "}
              <span className="text-emerald-700">{counter}</span> seconds.
            </p>
            <button onClick={() => navigate("/")} className="btn btn-primary">
              Return to home page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotPermitted;
