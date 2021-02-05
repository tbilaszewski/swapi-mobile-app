import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { styles } from "../../common/styles";
import { CardData, isSpaceshipResponse } from "../../common/types";
import { CardNotFound } from "../CardNotFound/CardNotFound";

interface SpaceshipCardProps {
  data?: CardData;
  winner?: boolean;
}

export const SpaceshipCard: React.FC<SpaceshipCardProps> = ({
  data,
  winner,
}) => {
  return data ? (
    <Card style={[styles.container, winner ? styles.winnerCard : {}]}>
      <Card.Title title={data.name} />
      {isSpaceshipResponse(data) && (
        <Card.Content>
          <Paragraph>Cost in credits: {data.cost_in_credits}</Paragraph>
          <Paragraph>Capacity: {data.cargo_capacity}</Paragraph>
          <Paragraph>Hyperdrive rating: {data.hyperdrive_rating}</Paragraph>
          <Paragraph>Crew: {data.crew}</Paragraph>
        </Card.Content>
      )}
    </Card>
  ) : (
    <CardNotFound />
  );
};
