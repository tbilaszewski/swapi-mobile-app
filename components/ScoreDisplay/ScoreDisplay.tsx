import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";
import { playersScoresSelector } from "../../store/score.selectors";

export const ScoreDisplay = () => {
  const scores = useSelector(playersScoresSelector);

  return (
    <View style={styles.container}>
      <View style={styles.playerInfo}>
        <Avatar.Text size={48} label={`${scores[0] ?? ""}`} />
        <Text>Player 1</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.playerInfo}>
        <Avatar.Text size={48} label={`${scores[1] ?? ""}`} />
        <Text>Player 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  playerInfo: {
    display: "flex",
    flexDirection: "column",
  },
  divider: {
    width: 2,
    backgroundColor: "gray",
    height: 50,
  },
});
