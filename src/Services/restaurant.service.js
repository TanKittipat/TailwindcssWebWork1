import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

// get all restaurants
const getAllRestaurant = async () => {
  return await api.get(RESTO_API);
};

// get restaurant by id
const getRestaurantById = async (id) => {
  return await api.get(RESTO_API + `/${id}`);
};

// edit restaurant
const updateRestaurant = async (id, restaurant) => {
  return await api.put(RESTO_API + `/${id}`, restaurant);
};

const RestaurantService = {
  getAllRestaurant,
  getRestaurantById,
  updateRestaurant,
};

export default RestaurantService;
