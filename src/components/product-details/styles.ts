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
  headerControls: {
    flexDirection: 'row',
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
  slider: {
    width: '100%',
    padding,
  },
  image: {width: '100%', aspectRatio: 1},
  details: {
    padding,
  },
  sectionUnderline: {
    paddingBottom: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
  },
  addToCart: {
    backgroundColor: '#008ACE',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 16,
    color: '#FFFFFF',
  },
});
