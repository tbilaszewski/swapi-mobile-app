import React from "react";
import { CardData, isSpaceshipResponse } from "../common/types";
import { findMaxCrewSize } from "../common/utils";
import { SpaceshipCard } from "../components";
import { CardsComparison } from "../components/CardsComparison";

import api from "../repository";

export const StarshipsScreen: React.FC = () => {
  return (
    <CardsComparison
      CardComponent={SpaceshipCard}
      loadData={api.spaceships.getRandom}
      comparisonFunction={(args: CardData[]) => {
        if (args.every(isSpaceshipResponse)) {
          return findMaxCrewSize(args);
        } else {
          return -1;
        }
      }}
    />
  );
};
