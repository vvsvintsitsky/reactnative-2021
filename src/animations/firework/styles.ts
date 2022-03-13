import {StyleSheet} from 'react-native';

const SPARK_SIZE = 15;

export const styles = StyleSheet.create({
  root: {
    width: 0,
    height: 0,
  },
  spark: {
    position: 'absolute',
    height: SPARK_SIZE,
    width: SPARK_SIZE,
    borderRadius: SPARK_SIZE,
    left: 0,
    top: 0,
  },
});
