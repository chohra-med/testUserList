import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {height} = Dimensions.get('window');

const textSize = height > 600 ? 14 : 10;

// eslint-disable-next-line no-undef
export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.WHITE,
    marginBottom: 40,
  },
  logo: {
    position: 'absolute',
    top: height / 3,
  },
  spinner: {
    position: 'absolute',
    top: height / 1.8,
    margin: 40,
  },

  textCopyright: {
    fontSize: textSize,
    fontStyle: 'normal',
    color: theme.DEFAULT,
    position: 'absolute',
    bottom: 25,
  },
}));
