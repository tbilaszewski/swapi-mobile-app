import axios from "axios";
import peopleRepository from "./PeopleRepository";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 1000,
  validateStatus: (status) => status >= 200 && status < 300,
});

export default {
  people: peopleRepository(axiosInstance),
};
