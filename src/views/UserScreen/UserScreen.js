import React, {PureComponent} from 'react';
import {SafeAreaView, ScrollView, Share, Text, TouchableOpacity, View} from 'react-native';
import styles from './UserScreenStyles';
import SliderImages from '../../components/SliderImages/SliderImages';
import {Avatar, Divider} from 'react-native-elements';
import {connect} from 'react-redux';


 class UserScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            newComments: [],
        };
    }
async componentDidMount() {
    await this.props.getPhotos(this.props.username);
}


     render() {
        let {
            first_name,
            last_name,
            bio,
            _id,
            profile_image
        } = this.props.data;
        let images=this.props.photos;
        return (
            <SafeAreaView style={styles.mainView}>
                <ScrollView
                    horizontal={false}
                    alwaysBounceHorizontal={false}
                    scrollDirection={'vertical'}
                >
                    <TouchableOpacity onPress={this.onClickProfile} style={styles.profileSection}>
                        <Avatar
                            source={{
                                uri:
                                profile_image.medium,
                            }}
                            size={'small'}
                        />
                        <Text style={styles.companyName}>
                            {last_name + first_name}
                        </Text>
                    </TouchableOpacity>
                    <View style={{}}>
                        <SliderImages
                            images={images} heightComponent={0.4} widthComponent={0.99}
                        />
                    </View>
                    <View style={styles.components}>
                        <Text style={styles.textPost}>
                            {bio}
                        </Text>

                    </View>



                </ScrollView>
            </SafeAreaView>
        );
    }
}


const mapStateToProps = state => ({
    photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
    getPhotos: (data) => dispatch(fetch(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserScreen);
