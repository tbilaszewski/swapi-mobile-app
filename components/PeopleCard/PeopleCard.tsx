import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { styles } from "../../common/styles";
import { CardData, isPeopleResponse } from "../../common/types";
import { CardNotFound } from "../CardNotFound";

interface PeopleCardProps {
  data?: CardData;
  winner?: boolean;
}

export const PeopleCard: React.FC<PeopleCardProps> = ({ data, winner }) => {
  return data ? (
    <Card style={[styles.container, winner ? styles.winnerCard : {}]}>
      <Card.Title title={data.name} />
      {isPeopleResponse(data) && (
        <Card.Content>
          <Paragraph>Birth: {data.birth_year}</Paragraph>
          <Paragraph>Gender: {data.gender}</Paragraph>
          <Paragraph>Height: {data.height}</Paragraph>
          <Paragraph>Mass: {data.mass}</Paragraph>
        </Card.Content>
      )}
    </Card>
  ) : (
    <CardNotFound />
  );
};
