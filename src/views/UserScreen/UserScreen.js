import React, {PureComponent} from 'react';
import {SafeAreaView, ScrollView, Share, Text, TouchableOpacity, View} from 'react-native';
import styles from './PostScreenStyle';
import SliderImages from '../../HomeScreen/ListView/SliderImages';
import {Avatar, Divider} from 'react-native-elements';
import LikeComentShareComponent from '../../Utilities/LikeComentShareComponent';
import {fetchUserList} from '../../redux/logics/users';
import {connect} from 'react-redux';


export default class PostScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            newComments: [],
        };
        this.onShare = this.onShare.bind(this);
    }

    onShare = async () => {
        let {
            companyName,
            text,
        } = this.props.data;
        try {
            const result = await Share.share({
                message:
                    `what an offer from ${companyName}, look what they said: ${text}`,
                title: companyName,
            });
        } catch (error) {
            console.log('error', error);
        }
    };

    renderComment = (name, post, index) => {
        return (
            <View style={styles.oneCommentContainer} key={index}>
                <View style={styles.commentView}>
                    <Avatar rounded title={name[0] + name[1]} size="medium"/>
                    <View style={styles.topCommentSide}>
                        <Text style={styles.commentName}> {name}</Text>
                        <Text style={styles.commentText}>{post}</Text>
                    </View>
                </View>
                <Divider style={styles.dividerComment}/>

            </View>
        );
    };
    updateElement = (data) => {
        let {newComments} = this.state;
        newComments.push(data);
        this.setState({newComments});
    };

    render() {
        let {
            createdBy,
            images,
            post,
            _id,
            comments,
            canComment,
            likedBy,
        } = this.props.data;

        let {
            userName,
            typeOffers,

        } = this.props;
        let {
            name,
            logoUrl,
        } = createdBy;

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
                                logoUrl,
                            }}
                            size={'small'}
                        />
                        <Text style={styles.companyName}>
                            {name}
                        </Text>
                    </TouchableOpacity>
                    <View style={{}}>
                        <SliderImages
                            images={images} heightComponent={0.4} widthComponent={0.99}
                        />
                    </View>
                    <View style={styles.components}>
                        <Text style={styles.textPost}>
                            {post}
                        </Text>

                    </View>
                    <View style={styles.commentContainer}>
                        {comments.map((item, index) =>
                            this.renderComment(
                                item.userName || 'Ch',
                                item.comment,
                                index,
                            ),
                        )}{this.state.newComments.map((item, index) =>
                        this.renderComment(
                            item.userName || 'Ch',
                            item.comment,
                            index,
                        ),
                    )}
                    </View>
                    <LikeComentShareComponent
                        data={{
                            name,
                            _id,
                            userName,
                            post,
                            type: typeOffers,
                            likedBy,
                            canComment,
                        }}
                        onComment={this.updateElement}

                    />

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
)(HomeScreen);
