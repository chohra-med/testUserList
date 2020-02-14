import React, {Component} from 'react';
import {
    Text,
    Image,
    SafeAreaView,
    I18nManager,
    ActivityIndicator,
    FlatList,
    TextInput,
    View,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './HomeScreenStyles';
import {strings} from '../../locales/i18n';
import {fetchUserList} from '../../redux/logics/users';
import ListUsers from './ListUsers';
import {Header, Input} from 'react-native-elements';
import Icon from '../../components/nativeIcon';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            nameFiltered: '',
            isFetching: false,
            loading: false,
        };
        this.filterBy = this.filterBy.bind(this);
        this.orderBy = this.orderBy.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    onRefresh() {
        this.setState({isFetching: true}, async () => {
            await this.props.getUserList();

            this.setState({
                    isFetching: false,
                    userList: this.props.users,
                },
            );
        });

    }

//to filter our data by NAME
    filterBy() {
        let {
            generalData,
            nameFiltered,
        } = this.state;
        let data = generalData;
        data = data.filter(x => String(x.name.toUpperCase()).includes(nameFiltered.toUpperCase()));
        this.setState({ourData: data});
    }

    //to order our data by NAME
    orderBy() {
        let data = this.state.ourData;
        data = _.sortBy(data, ['name', 'id']);
        this.setState({ourData: data});
    }
    componentDidMount() {
    }

    render() {
        let {photos} = this.props;
        let {userList, nameFiltered, isFetching} = this.state;
        let data = userList.length > 0 ? userList : null;

        return (
            <SafeAreaView style={styles.container}>
                <Header
                    placement="left"
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <TextInput
                                style={{height: 40, borderWidth: 2, margin: 5, width: '60%'}}
                                placeholder={I18n.t('filtering')}
                                value={nameFiltered}
                                onChangeText={(nameFiltered) => {
                                    this.setState({nameFiltered});
                                    this.filterBy;
                                }}
                            />

                                <Icon color='black' size={20} name="search"
                                      onPress={this.filterBy}
                                      style={{
                                          width: 30,
                                          justifyContent: 'center',
                                          borderRadius: 20,
                                          borderColor: 'grey',
                                          margin: 6,
                                      }}
                                />
                        </View>
                    }
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
                <FlatList
                    data={data}
                    // ListHeaderComponent={() =>
                    //     <View style={styles.headerImage}>
                    //       <SliderImages
                    //                     images={photos}
                    //                     heightComponent={0.24}
                    //                     widthComponent={0.9}
                    //       />
                    //     </View>
                    // }
                    renderItem={({item}) =>
                        <ListUsers data={item}/>
                    }

                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    keyExtractor={item => item._id.toString()}
                    getItemLayout={(data, index) => (
                        {length: height * 0.4, offset: height * 0.24, index}
                    )}
                    onRefresh={this.onRefresh}
                    refreshing={isFetching}

                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => ({
    getUserList: () => dispatch(fetchUserList()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);
