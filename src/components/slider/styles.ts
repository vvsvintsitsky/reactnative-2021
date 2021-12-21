import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
  },
  itemViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemView: {
    width: '100%',
  },
  buttonIcon: {
    width: 6,
    height: 19,
    color: '#C3C3C3',
  },
  positionIcon: {
    width: 8,
    aspectRatio: 1,
    marginHorizontal: 2.5,
    color: '#C3C3C3',
  },
  currentPositionIcon: {
    color: '#008ACE',
  },
  itemPositionIndicator: {
    flexDirection: 'row',
  },
});
