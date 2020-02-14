import React, {Component} from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  I18nManager,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import styles from './HomeScreenStyles';
import {strings} from '../../locales/i18n';
import {LOGO} from '../../assets/images';
import {fetchUserList} from '../../redux/logics/users';
import PersonnalHeader from '../../components/PersonnalHeader/PersonnalHeader';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PersonnalHeader style={styles.logo} source={LOGO} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
  getUserList: () => dispatch(fetchUserList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
