import {Scene, Router} from 'react-native-router-flux';

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from '../redux/configureStore';

import StartingScreen from '../views/StartingScreen/StartingScreen';
import HomeScreen from '../views/HomeScreen/HomeScreen';
import LoadingView from '../components/LoadingView';
import UserScreen from '../views/UserScreen/UserScreen';

const {persistor, store} = configureStore();

const AppNavigator = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<LoadingView />}>
      <Router>
        <Scene key="root" cardStyle={{backgroundColor: '#FFF'}} initial>
          <Scene key="starting" component={StartingScreen} hideNavBar initial />
          <Scene key="home" component={HomeScreen} hideNavBar />
          <Scene key="userScreen" component={UserScreen} hideNavBar />
        </Scene>
      </Router>
    </PersistGate>
  </Provider>
);
export default (MyApp = AppNavigator);
