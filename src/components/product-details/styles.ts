import {StyleSheet} from 'react-native';

const padding = 20;
const buttonHeight = 40;

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
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
  price: {
    marginTop: 15,
  },
  slider: {
    width: '100%',
    padding,
  },
  image: {width: '100%', aspectRatio: 1},
  details: {
    padding,
    marginBottom: buttonHeight,
  },
  sectionUnderline: {
    paddingBottom: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
  },
  footer: {
    position: 'absolute',
    bottom: padding,
    width: '100%',
    paddingHorizontal: padding,
  },
  addToCart: {
    height: buttonHeight,
    width: '100%',
  },
});
