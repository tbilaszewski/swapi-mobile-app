import { AxiosInstance } from "axios";
import { PeopleResponse } from "./model";
import random from "lodash/random";

const PEOPLE_COUNT = 83;

export default (axios: AxiosInstance) => ({
  getRandom: (): Promise<PeopleResponse> => {
    const randomId = random(PEOPLE_COUNT);
    return axios
      .get(`people/${randomId}`)
      .then((response) => response.data as PeopleResponse);
  },
});
