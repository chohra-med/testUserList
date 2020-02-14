import React, {PureComponent} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const textSize = (height > 600) ? 16 : 12;
import Icon from '../../components/nativeIcon';
import SliderImages from '../../components/SliderImages/SliderImages';
import theme from '../../theme';

export default class ListUsers extends PureComponent {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount() {
    }

    onPress() {
        let {data} = this.props;
        alert('clicked');
        // Actions.retailPageScreen({
        //     data: data,
        //     config: this.props.config,
        // });
    };

    render() {
        let {
            first_name,
            last_name,
            profile_image,
            bio,
        } = this.props.data;

        return (

            <TouchableOpacity
                onPress={this.onPress}
                style={styles.listViewContainer}>
                <SliderImages
                    onPress={this.onPress}
                    images={[profile_image.large]} heightComponent={0.09}
                    widthComponent={0.3}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{first_name + last_name}</Text>
                    <Text style={styles.title}> {bio}</Text>

                </View>


            </TouchableOpacity>

        );
    }
}


const styles = StyleSheet.create({
    listViewContainer: {
        flexDirection: 'row',
        flex: 1,
        width: width * 0.9,
        height: height * 0.1,
        alignSelf: 'center',
        margin: 10,
    },
    button: {
        marginTop: height * 0.05,
        position: 'absolute',
        right: 16,
    },
    name: {
        fontSize: textSize * 1.2,
        color: theme.BLACK,
        fontWeight: theme.WEIGHT_HEAVY,
    },
    title: {
        fontSize: textSize *0.9,
        color: theme.DEFAULT,
        fontWeight: theme.WEIGHT_MEDIUM,
        margin: 3,

    },
    textContainer: {
        flexDirection: 'column',
        margin: 10,
        marginTop: 15,
    },

});
