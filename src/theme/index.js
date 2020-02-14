import {Dimensions, Platform} from 'react-native';

const {height} = Dimensions.get('window');
const textSize = height > 600 ? 14 : 10;

export default {
  // FONT FAMILY
  FONT_FAMILY_PRIMARY: Platform.select({
    android: 'Aquawax Light Trial',
    ios: 'Aquawax-Light',
  }),
  FONT_FAMILY_SECONDARY: Platform.select({
    android: 'CenturyGothic',
    ios: 'CenturyGothic',
  }),
  // FONT SIZE
  SIZE_SMALL: textSize,
  SIZE_MEDIUM: textSize + 3,
  SIZE_LARGE: textSize + 6,
  // FONT WEIGHT
  WEIGHT_LIGHT: '200',
  WEIGHT_MEDIUM: '600',
  WEIGHT_HEAVY: '800',
  // COLORS
  PRIMARY_COLOR_LIGHT: '#a7529a',
  PRIMARY_COLOR: '#76236c',
  PRIMARY_COLOR_DARK: '#470041',
  SECONDARY_COLOR_DARK: '#0000ca',
  SECONDARY_COLOR: '#4000ff',
  SECONDARY_COLOR_LIGHT: '#8845ff',
  WHITE: '#ffffff',
  GREY_WHITE: '#F4F4F4',
  LIGHTER: '#afafaf',
  LIGHT: '#707070',
  DEFAULT: '#4b4b4b',
  DARK: '#313131',
  DARKER: '#1b1b1b',
  BLACK: '#000000',
  BLUE: 'blue',
};
