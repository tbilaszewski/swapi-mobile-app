import { AxiosInstance } from "axios";
import random from "lodash/random";
import { SpaceshipResponse } from "./model";

const SHIPS_COUNT = 40;

export default class {
  constructor(private axios: AxiosInstance) {}

  getRandom = (): Promise<SpaceshipResponse> => {
    const randomId = random(SHIPS_COUNT);

    return this.axios
      .get(`starships/${randomId}`)
      .then((response) => response.data as SpaceshipResponse)
      .catch(() => this.getRandom());
  };
}
