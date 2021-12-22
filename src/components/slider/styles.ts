import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    justifyItems: 'center',
  },
  itemViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemView: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    marginHorizontal: 35,
  },
  buttonIcon: {
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
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
