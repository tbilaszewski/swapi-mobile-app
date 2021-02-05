import React from "react";
import { CardData, isPeopleResponse } from "../common/types";
import { findHeaviest } from "../common/utils";
import { PeopleCard } from "../components";
import { CardsComparison } from "../components/CardsComparison";

import api from "../repository";

export const PeopleScreen: React.FC = () => {
  return (
    <CardsComparison
      CardComponent={PeopleCard}
      loadData={api.people.getRandom}
      comparisonFunction={(args: CardData[]) => {
        if (args.every(isPeopleResponse)) {
          return findHeaviest(args);
        } else {
          return -1;
        }
      }}
    />
  );
};
