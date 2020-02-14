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
            name,
            images,
            title,

        } = this.props.data;


        return (
            <>
                <TouchableOpacity
                    onPress={this.onPress}>
                    <View style={styles.listViewContainer}>
                        <SliderImages
                            onPress={this.onPress}
                            images={images} heightComponent={0.09}
                            widthComponent={0.3}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.title}> {title}</Text>

                        </View>
                        <Icon name="arrow-right" style={styles.button}
                              color='black'
                              size={32}
                              onPress={this.onPress}
                        />
                    </View>

                </TouchableOpacity>

            </>
        );
    }
}


const styles = StyleSheet.create({
    listViewContainer: {
        flexDirection: 'row',
        flex: 1,
        width: width,
        height: height*0.1,
        justifyContent: 'center',
    },
    button: {
        marginTop: height*0.05,
        position: 'absolute',
        right: 16,
    },
    name: {
        fontSize: textSize,
        color: theme.BLACK,
        fontWeight:theme.WEIGHT_HEAVY
    },
    title:{
        fontSize: textSize-5,
        color: theme.DEFAULT,
        fontWeight:theme.WEIGHT_MEDIUM

    },
    textContainer: {
        flexDirection: 'column',
        margin: 10,

    },

});
