import api from "./api";
import TokenService from "./token.service";

const API_URL = "/api/v1/auth";

const register = async (username, email, userPassword) => {
  return await api.post(API_URL + "/signup", { username, email, userPassword });
};

const login = async (username, userPassword) => {
  const response = await api.post(API_URL + "/signin", {
    username,
    userPassword,
  });
  if (response.data.accessToken) {
    localStorage.setItem(
      "accessToken",
      JSON.stringify(response.data.accessToken)
    );
    localStorage.setItem("user", JSON.stringify(response));
  }
  return response;
};

const AuthService = {
  register,
  login,
};

export default AuthService;
