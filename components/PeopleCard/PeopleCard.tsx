import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    flexGrow: 0,
  },
  winnerCard: {
    borderColor: "green",
    borderWidth: 5,
  },
});
