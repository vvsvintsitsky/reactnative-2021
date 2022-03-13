import {StyleSheet} from 'react-native';

const padding = 20;

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
    height: 55,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  search: {
    padding,
    width: '100%',
  },
  searchInput: {
    width: '100%',
  },
  items: {
    padding,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemShadow: {
    marginBottom: padding,
  },
  item: {
    aspectRatio: 1,
  },
});
