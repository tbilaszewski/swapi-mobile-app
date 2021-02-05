import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { styles } from "../../common/styles";
import { SpaceshipResponse } from "../../repository/model";
import { CardNotFound } from "../CardNotFound/CardNotFound";

interface SpaceshipCardProps {
  data?: SpaceshipResponse;
  winner?: boolean;
}

export const SpaceshipCard: React.FC<SpaceshipCardProps> = ({
  data,
  winner,
}) => {
  return data ? (
    <Card style={[styles.container, winner ? styles.winnerCard : {}]}>
      <Card.Title title={data.name} />
      <Card.Content>
        <Title>{}</Title>
        <Paragraph>Cost in credits: {data.cost_in_credits}</Paragraph>
        <Paragraph>Capacity: {data.cargo_capacity}</Paragraph>
        <Paragraph>Hyperdrive rating: {data.hyperdrive_rating}</Paragraph>
        <Paragraph>Crew: {data.crew}</Paragraph>
      </Card.Content>
    </Card>
  ) : (
    <CardNotFound />
  );
};
