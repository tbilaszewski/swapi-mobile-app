import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { styles } from "../../common/styles";
import { PeopleResponse } from "../../repository/model";
import { CardNotFound } from "../CardNotFound";

interface PeopleCardProps {
  data?: PeopleResponse;
  winner?: boolean;
}

export const PeopleCard: React.FC<PeopleCardProps> = ({ data, winner }) => {
  return data ? (
    <Card style={[styles.container, winner ? styles.winnerCard : {}]}>
      <Card.Title title={data.name} />
      <Card.Content>
        <Title>{}</Title>
        <Paragraph>Birth: {data.birth_year}</Paragraph>
        <Paragraph>Gender: {data.gender}</Paragraph>
        <Paragraph>Height: {data.height}</Paragraph>
        <Paragraph>Mass: {data.mass}</Paragraph>
      </Card.Content>
    </Card>
  ) : (
    <CardNotFound />
  );
};
