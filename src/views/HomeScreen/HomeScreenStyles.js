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
});
