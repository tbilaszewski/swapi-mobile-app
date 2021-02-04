import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

import { SpaceshipCard, CardNotFound } from "../components";
import { findMaxCrewSize } from "../common/utils";
import { Nullable } from "../common/types";

import api from "../repository";
import { SpaceshipResponse } from "../repository/model";
import { scoreSlice } from "../store/score.slice";
import { useDispatch } from "react-redux";

const loadRandomSpaceship = api.spaceships.getRandom;

export default function SpaceshipsScreen() {
  const [loading, setLoading] = useState(false);
  const [spaceships, setSpaceships] = useState<
    Nullable<[SpaceshipResponse, SpaceshipResponse]>
  >();

  const dispatch = useDispatch();

  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const loadTwoRandomSpaceships = useCallback(() => {
    setLoading(true);
    Promise.all([loadRandomSpaceship(), loadRandomSpaceship()])
      .then((spaceships) => {
        setSpaceships(spaceships);
      })
      .catch(() => {
        setSpaceships(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadTwoRandomSpaceships();
  }, []);

  useEffect(() => {
    if (spaceships) {
      const maxCrewIndex = findMaxCrewSize(spaceships);
      dispatch(scoreSlice.actions.incrementScore(maxCrewIndex));
      setHighlightedIndex(maxCrewIndex);
    }
  }, [spaceships]);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      {spaceships ? (
        <>
          <SpaceshipCard data={spaceships[0]} winner={highlightedIndex === 0} />
          <Button onPress={loadTwoRandomSpaceships}>Reload</Button>
          <SpaceshipCard data={spaceships[1]} winner={highlightedIndex === 1} />
        </>
      ) : (
        <>
          <CardNotFound />
          <Button onPress={loadTwoRandomSpaceships}>Reload</Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "space-around",
  },
});
