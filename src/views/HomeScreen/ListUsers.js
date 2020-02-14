import React, {PureComponent} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const textSize = (height > 600) ? 16 : 12;
import Icon from '../../components/nativeIcon';
import SliderImages from '../../components/SliderImages/SliderImages';

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
                            images={images} heightComponent={0.24} widthComponent={0.9}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.helps}> {title}</Text>

                        </View>
                        <Icon name="arrow-right" style={styles.button}
                              color='black'
                              size={32}
                              onPress={this.onPress}
                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 0.5,
                            width: '90%',
                            marginLeft: '5%',
                        }}
                    />
                </TouchableOpacity>

            </>
        );
    }
}


const styles = StyleSheet.create({
    listViewContainer: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        height: 80,
        justifyContent: 'center',
    },
    button: {
        marginTop: '5%',
        position: 'absolute',
        right: '5%',
    },
    name: {
        color: 'black',
        fontSize: 16,
    },
    textContainer: {
        flexDirection: 'column',
        margin: 10,
    },

});
