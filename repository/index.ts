import axios from "axios";
import { setupCache } from "axios-cache-adapter";

import PeopleRepository from "./PeopleRepository";
import SpaceshipsRepository from "./SpaceshipsRepository";

const cache = setupCache({
  maxAge: 30 * 60 * 1000,
});

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 1000,
  validateStatus: (status) => status >= 200 && status < 300,
  maxRedirects: 10,
  adapter: cache.adapter,
});

export default {
  people: new PeopleRepository(axiosInstance),
  spaceships: new SpaceshipsRepository(axiosInstance),
};
