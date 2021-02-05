import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { CardData } from "../../common/types";

import { scoreSlice } from "../../store/score.slice";
import { DataType } from "./types";

interface CardsComparisonProps {
  CardComponent: React.FC<{
    data?: CardData;
    winner?: boolean;
  }>;
  loadData: () => Promise<CardData>;
  comparisonFunction: (args: CardData[]) => number;
}
export const CardsComparison: React.FC<CardsComparisonProps> = ({
  loadData,
  comparisonFunction,
  CardComponent,
}) => {
  const [loading, setLoading] = useState(false);

  const [first, setFirst] = useState<DataType<typeof loadData>>();
  const [second, setSecond] = useState<DataType<typeof loadData>>();

  const [highlighted, setHighlighted] = useState<number>(-1);

  const dispatch = useDispatch();

  const updateData = useCallback(
    ([_first, _second]: DataType<typeof loadData>[]) => {
      setFirst(_first);
      setSecond(_second);
      if (_first && _second) {
        const highlightIndex = comparisonFunction([_first, _second]);
        dispatch(scoreSlice.actions.incrementScore(highlightIndex));
        setHighlighted(highlightIndex);
      }
    },
    []
  );

  const loadCardData = useCallback(() => {
    setLoading(true);
    Promise.all([loadData(), loadData()])
      .then(updateData)
      .catch(() => {
        setFirst(undefined);
        setSecond(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadCardData();
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <CardComponent data={first} winner={highlighted === 0} />
      <Button onPress={loadCardData}>Reload</Button>
      <CardComponent data={second} winner={highlighted === 1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "space-around",
  },
});
