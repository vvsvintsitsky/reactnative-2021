import {StyleSheet} from 'react-native';

const padding = 20;

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    padding: 16,
  },
  headerIcon: {
    color: '#FFFFFF',
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
    shadowColor: '#333333',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20,
  },
  items: {
    padding,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    marginBottom: padding,
    marginRight: padding,
    width: '40%',
    aspectRatio: 1,
  },
});
