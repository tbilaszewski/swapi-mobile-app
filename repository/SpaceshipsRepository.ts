import { AxiosInstance } from "axios";
import random from "lodash/random";
import { SpaceshipResponse } from "./model";

const SHIPS_COUNT = 40;

export default (axios: AxiosInstance) => ({
  getRandom: (): Promise<SpaceshipResponse> => {
    const randomId = random(SHIPS_COUNT);
    return axios
      .get(`starships/${randomId}`)
      .then((response) => response.data as SpaceshipResponse);
  },
});
