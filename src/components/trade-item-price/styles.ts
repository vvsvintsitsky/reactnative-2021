import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 15,
  },
  currentPrice: {
    color: '#4A4A4A',
  },
  price: {
    marginHorizontal: 10,
    color: '#8F8F8F',
    textDecorationLine: 'line-through',
  },
  discount: {
    color: '#00A8F3',
  },
});
