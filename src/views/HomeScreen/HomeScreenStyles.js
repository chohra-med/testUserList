import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

const {width,height} = Dimensions.get('window');

const textSize = height > 600 ? 14 : 10;

// eslint-disable-next-line no-undef
export default (styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.WHITE,
        marginBottom: 40,
    },
    containerStyle: {
        backgroundColor: theme.WHITE,
        borderBottomColor: theme.GREY_WHITE,
        width,
        paddingVertical: 16,
        borderBottomWidth: textSize / 8,
    },
    centerComponent: {
        flex:6,
        backgroundColor:'blue',
        color:'blue'
    },

}));
