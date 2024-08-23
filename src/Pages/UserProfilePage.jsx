import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const UserProfilePage = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const concealedText = (str, start, end) => {
    if (
      !str ||
      start < 0 ||
      start > str.length ||
      end < 0 ||
      end > str.length ||
      start > end
    ) {
      return str;
    }
    const maskedStr =
      str.substring(0, start) + "*".repeat(20) + str.substring(end);
    return maskedStr;
  };

  return (
    <div>
      <div className="hero my-40">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../assets/profile2.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="w-96">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-secondary" onClick={handleBack}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
