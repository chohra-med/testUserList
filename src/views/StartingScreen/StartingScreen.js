import React, {Component} from 'react';
import {Text, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import styles from './StartingScreenStyle';
import {strings} from '../../locales/i18n';
import {LOGO} from '../../assets/images';
import {fetchUserList} from '../../redux/logics/users';
import {setAuthorizationToken} from '../../redux/service/setAuthToken';
import {Access_Key} from '../../config';

class StartingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const {getUserList} = this.props;
    this.setState({loading: true}, async () => {
      try {
        setAuthorizationToken(Access_Key);
        await getUserList();
        Actions.tabbar({type: 'reset'});
      } catch (e) {
        if (
          e.response &&
          e.response.status &&
          Math.round(e.response.status / 100) === 4
        ) {
          console.log('error', e.response);
        }
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={LOGO} />
        <ActivityIndicator
          color={'black'}
          size="large"
          style={styles.spinner}
        />
        <Text style={styles.textCopyright}>
          {strings('starting.copyright')}
        </Text>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserList: () => dispatch(fetchUserList()),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(StartingScreen);
