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
  textConnection: {
    fontFamily: theme.FONT_FAMILY_PRIMARY,
    fontSize: textSize * 1.3,
    color: theme.BLACK,
    position: 'absolute',
    top: height / 1.5,
  },
  textCopyright: {
    fontFamily: theme.FONT_FAMILY_SECONDARY,
    fontSize: textSize,
    fontStyle: 'normal',
    color: theme.DEFAULT,
    position: 'absolute',
    bottom: 25,
  },
}));
