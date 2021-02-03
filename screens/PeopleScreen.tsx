import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { findHeaviest } from "../common/utils";
import { PeopleCard } from "../components";

import api from "../repository";
import { PeopleResponse } from "../repository/model";

export default function PeopleScreen() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState<[PeopleResponse, PeopleResponse]>();

  const [heaviestIndex, setHeaviestIndex] = useState<number>(-1);

  const loadTwoRandomPeople = useCallback(() => {
    setLoading(true);
    Promise.all([api.people.getRandom(), api.people.getRandom()])
      .then((people) => {
        setPeople(people);
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
      setHeaviestIndex(findHeaviest(people));
    }
  }, [people]);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      {people && <PeopleCard data={people[0]} winner={heaviestIndex === 0} />}
      <Button onPress={loadTwoRandomPeople}>Reload</Button>
      {people && <PeopleCard data={people[1]} winner={heaviestIndex === 1} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "space-around",
  },
});
