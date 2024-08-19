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

const deleteRestaurant = async (id) => {
  return await api.delete(RESTO_API + `/${id}`);
};

const addRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

const RestaurantService = {
  getAllRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  addRestaurant,
};

export default RestaurantService;
