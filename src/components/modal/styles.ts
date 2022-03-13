import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    display: 'flex',
    paddingTop: 25,
    paddingBottom: 30,
    width: '100%',
  },
  icon: {
    height: 66,
    width: 66,
    marginBottom: 15,
  },
  header: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  content: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
  },
});
