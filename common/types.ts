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
