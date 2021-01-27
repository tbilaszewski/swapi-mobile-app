import * as React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function PeopleScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
