import {StyleSheet, Platform, Dimensions} from 'react-native';
import theme from '../../theme';

const {width, height} = Dimensions.get('window');

const textSize = (height > 600) ? 16 : 12;

export default styles = StyleSheet.create({
    mainView: {
        marginVertical: 4,
        backgroundColor: theme.WHITE,
        width: width,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
    },
    components: {
        marginVertical: 4,
        backgroundColor: theme.WHITE,
        width: width * 0.94,
        padding: 4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',

    },
    profileSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: width,
        alignSelf: 'flex-start',
        marginTop: 10,
        position: 'absolute',
        zIndex: 3,
        height: height * 0.06,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'rgba(23.5, 22.4, 22.4, 0.3)',
        alignItems: 'center',
    },
    companyName: {
        fontSize: theme.SIZE_LARGE * 1.2,
        color: theme.WHITE,
        alignSelf: 'center',
        margin: 4,
    },
    buttonAction: {
        flexDirection: 'row',
        width: width * 0.9,
        marginTop: 4,
    },
    buttonClick: {
        flex: 1,
        borderWidth: 1,
        margin: 0.5,
        borderColor: theme.GREY_WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textPost: {
        fontSize: theme.SIZE_SMALL,
        color: theme.DEFAULT,
        padding: 4,
    },
    oneCommentContainer: {
        width:width,
        flexDirection:'column',

    },
    commentView: {
        maxWidth: width * 0.8,
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginVertical:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:height*0.07,
    },
    topCommentSide: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        justifyContent: 'space-around',
        margin: 7,
        paddingTop: 7,
    },
    rightTopCommentSide: {
        marginLeft: 10,
        justifyContent: 'center',
    },

    dividerComment: {
        backgroundColor: theme.WHITE,
        width: width,
        height: 2,

    },

    containerDescription: {
        height: 30,
        width: width * 0.9,
        borderRadius: 1,
        borderColor: theme.GREY_WHITE,
        borderWidth: 1,
        paddingHorizontal: 32,
        backgroundColor: theme.GREY_WHITE,
    },
    buttonTitle: {
        fontSize: theme.SIZE_MEDIUM,
        color: theme.DEFAULT,
        paddingHorizontal: 4,
        alignSelf: 'center',

    },
    buttonSend: {
        position: 'absolute',
    },
    commentContainer: {
        width: width,
        backgroundColor: theme.GREY_WHITE,
    },
    comment: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    avatarThisUser: {
        width: 29,
        height: 29,
        position: 'absolute',
        marginHorizontal: 2,
        zIndex: 4,
        borderWidth: 0.5,
        borderColor: theme.WHITE,
    },


});
