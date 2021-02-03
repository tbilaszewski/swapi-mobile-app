import { AxiosInstance } from "axios";
import { SpaceshipResponse } from "./model";
import random from "lodash/random";

const SHIPS_COUNT = 41;

export default (axios: AxiosInstance) => ({
  getRandom: (): Promise<SpaceshipResponse> => {
    const randomId = random(SHIPS_COUNT);
    return axios
      .get(`people/${randomId}`)
      .then((response) => response.data as SpaceshipResponse);
  },
});
