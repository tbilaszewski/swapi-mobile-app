import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Nullable } from "../common/types";
import { findHeaviest } from "../common/utils";
import { CardNotFound, PeopleCard } from "../components";

import api from "../repository";
import { PeopleResponse } from "../repository/model";
import { scoreSlice } from "../store/score.slice";

const loadRandomPerson = api.people.getRandom;

export default function PeopleScreen() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState<
    Nullable<[PeopleResponse, PeopleResponse]>
  >(null);

  const [heaviestIndex, setHeaviestIndex] = useState<number>(-1);

  const dispatch = useDispatch();

  const loadTwoRandomPeople = useCallback(() => {
    setLoading(true);
    Promise.all([loadRandomPerson(), loadRandomPerson()])
      .then((people) => {
        setPeople(people);
      })
      .catch(() => {
        setPeople(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadTwoRandomPeople();
  }, []);

  useEffect(() => {
    if (people) {
      const heaviestIndex = findHeaviest(people);
      dispatch(scoreSlice.actions.incrementScore(heaviestIndex));
      setHeaviestIndex(heaviestIndex);
    }
  }, [people]);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      {people ? (
        <>
          <PeopleCard data={people[0]} winner={heaviestIndex === 0} />
          <Button onPress={loadTwoRandomPeople}>Reload</Button>
          <PeopleCard data={people[1]} winner={heaviestIndex === 1} />
        </>
      ) : (
        <>
          <CardNotFound />
          <Button onPress={loadTwoRandomPeople}>Reload</Button>
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
