import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    FlatList,
    View,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './HomeScreenStyles';
import {strings} from '../../locales/i18n';
import {fetchUserList} from '../../redux/logics/users';
import ListUsers from './ListUsers';
import {Header, Input, SearchBar} from 'react-native-elements';
import theme from '../../theme';
import _ from 'lodash';
import Icon from '../../components/nativeIcon';

const {width, height} = Dimensions.get('window');

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
            await this.props.getUserList('da');
            let newUserArray = Object.entries(this.props.users).map(function ([key, v]) {
                return v;
            });

            this.setState({
                    isFetching: false,
                    userList: newUserArray,
                    nameFiltered: '',
                },
            );
        });
    }

    renderBlankElement() {
        return (
            <View style={{
                alignItems: 'center',
                height: height * 0.4,
                marginTop: height * 0.15,
                justifyContent: 'space-between',
            }}>
                <View style={{alignItems: 'center'}}>
                    <Icon
                        name="shield-search"
                        size={width / 5}
                        color="#76236c"
                        style={{padding: 3}}
                    />
                    <Text style={{
                        fontSize:  27,
                        color: theme.BLACK,
                    }}>
                        Not Found !!!
                    </Text>
                    <Text style={{
                        color: '#333',
                        fontSize: 15,
                        fontWeight: '500',
                        marginBottom: 15,
                    }}>
                        Pull to initialize the list
                    </Text>
                </View>

            </View>
        );
    }


//to filter our data by NAME
    filterBy() {
        this.setState({isFetching: true}, async () => {
            await this.props.getUserList(this.state.nameFiltered);
            let newUserArray = Object.entries(this.props.users).map(function ([key, v]) {
                return v;
            });

            this.setState({
                    isFetching: false,
                    userList: newUserArray,
                },
            );
        });
    }

    //to order our data by NAME
    orderBy() {
        let userList = Object.entries(this.props.users).map(function ([key, v]) {
            return v;
        });
        let data = userList;
        data = _.sortBy(data, ['name', '_id']);
        this.setState({userList: data});
    }

    componentDidMount() {
        let {
            users,
        } = this.props;
        let newUserArray = Object.entries(users).map(function ([key, v]) {
            return v;
        });
        console.log(newUserArray);
        this.setState({
            userList: newUserArray,
        });
    }

    updateSearch = nameFiltered => {
        this.setState({nameFiltered});
    };

    render() {
        let {photos} = this.props;
        let {userList, nameFiltered, isFetching} = this.state;
        let data = userList.length > 0 ? userList : null;

        return (
            <SafeAreaView style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'sort', color: '#76236c', size: 24,
                        onPress: this.orderBy,
                    }}
                    centerComponent={
                        <SearchBar
                            placeholder={strings('home.seachplaceholder')}
                            onChangeText={this.updateSearch}
                            value={nameFiltered}
                            inputContainerStyle={styles.searchinputContainerStyle}
                            lightTheme={true}
                            searchIcon={{
                                icon: 'magnify', color: 'black', size: 24,
                                onPress: this.filterBy,
                            }}
                        />
                    }
                    centerContainerStyle={styles.centerComponent}
                    containerStyle={styles.containerStyle}
                />
                <FlatList
                    data={data}
                    renderItem={({item}) =>
                        <ListUsers data={item}/>
                    }
                    keyExtractor={item => item.id.toString()}
                    getItemLayout={(data, index) => (
                        {length: height * 0.2, offset: height * 0.05, index}
                    )}
                    onRefresh={this.onRefresh}
                    refreshing={isFetching}
                    ListEmptyComponent={this.renderBlankElement}

                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => ({
    getUserList: (data) => dispatch(fetchUserList(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);
