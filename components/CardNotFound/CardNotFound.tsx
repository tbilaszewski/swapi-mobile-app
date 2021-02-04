import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const CardNotFound: React.FC = () => (
  <Card style={[styles.container]}>
    <Card.Title title="Cards not found" />
  </Card>
);
const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    flexGrow: 0,
  },
});
