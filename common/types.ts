import { PeopleResponse, SpaceshipResponse } from "../repository/model";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  People: undefined;
  Starships: undefined;
};

export type TabOneParamList = {
  PeopleScreen: undefined;
};

export type TabTwoParamList = {
  StarshipsScreen: undefined;
};

export type PeopleWithMass = Pick<PeopleResponse, "mass">;

export type StarshipsWithCrew = Pick<SpaceshipResponse, "crew">;

export type Nullable<T> = null | T;

export type Optional<T> = undefined | T;

export type CardData = PeopleResponse | SpaceshipResponse;

export const isPeopleResponse = (
  response: CardData
): response is PeopleResponse =>
  (response as PeopleResponse).mass !== undefined;

export const isSpaceshipResponse = (
  response: CardData
): response is SpaceshipResponse =>
  (response as SpaceshipResponse).crew !== undefined;
