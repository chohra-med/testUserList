import {
  Scene, Router, Stack, Tabs,
} from 'react-native-router-flux';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import StartingScreen from '../component/StartingScreen/StartingScreen';
import PhoneLoginScreen from '../component/PhoneLoginScreen/PhoneLoginScreen';
import UserChoosingScreen from '../component/UserChoosingScreen/UserChoosingScreen';
import CreateAccountUSERScreen from '../component/CreateAccountUSERScreen/CreateAccountUSERScreen';
import LoginScreenOwner from '../component/LoginScreenOwner/LoginScreenOwner';
import LoginScreenCompany from '../component/LoginScreenCompany/LoginScreenCompany';

import PersonnalHeader from '../component/Utilities/PersonnalHeader/PersonnalHeader';
import TabIcon from '../component/Utilities/TabIcon';
import HomeScreen from '../component/HomeScreen/HomeScreen';
import SearchScreen from '../component/SearchScreen/SearchScreen';
import WallScreen from '../component/WallScreen/WallScreen';
import FavoriteScreen from '../component/FavoriteScreen/FavoriteScreen';
import RetailPageScreen from '../component/RetailPageScreen/RetailPageScreen';
import AddNewPropertyScreen from '../component/AddNewPropertyScreen/AddNewPropertyScreen';
import GetPosition from '../component/Utilities/GetPosition/GetPosition';
import OwnerPageScreen from '../component/OwnerPageScreen/OwnerPageScreen';
import PaymentPlanScreen from '../component/PaymentPlanScreen/PaymentPlanScreen';
import MyProfileScreen from '../component/MyProfileScreen/MyProfileScreen';
import MyPropertyScreen from '../component/MyPropertyScreen/MyPropertyScreen';


import LoadingView from '../component/Utilities/LoadingView';
import configureStore from '../redux/configureStore';
import theme from '../theme';
import DoPayment from '../component/PaymentPlanScreen/DoPayment';
import EditPropertyScreenStyle from '../component/EditPropertyScreen/EditPropertyScreenStyle';
import EditPropertyScreen from '../component/EditPropertyScreen/EditPropertyScreen';
import CompanyScreen from '../component/CompanyScreen/CompanyScreen';
import MyCompanyScreen from '../component/MyCompanyScreen/MyCompanyScreen';
import SettingScreen from '../component/SettingScreen/SettingScreen';
import FirstLoginScreen from '../component/FirstLoginScreen/FirstLoginScreen';
import PostScreen from '../component/WallScreen/PostComponent/PostScreen';
import AddNewPostScreen from '../component/AddNewPostScreen/AddNewPostScreen';
import MyPostWalletScreen from '../component/MyPostWalletScreen/MyPostWalletScreen';

const { persistor, store } = configureStore();

const AppNavigator = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<LoadingView />}>
      <Router>
        <Scene
          key="root"
          cardStyle={{ backgroundColor: '#FFF' }}
          navBar={PersonnalHeader}
          initial
        >
          <Stack key="login" hideNavBar initial>
            <Scene
              key="starting"
              component={StartingScreen}
              title="Intro"
              hideNavBar
              initial
            />
            <Scene
              key="firstLogin"
              component={FirstLoginScreen}
              hideNavBar
            />
            <Scene
              key="phoneLogin"
              component={PhoneLoginScreen}
              title="FirstScreen"
              hideNavBar
            />
            <Scene
              key="userChoosing"
              component={UserChoosingScreen}
              title="userChoosing"
              hideNavBar
            />
            <Scene
              key="createAccountUSER"
              component={CreateAccountUSERScreen}
              title="CreateAccountUSERScreen"
              hideNavBar
            />
            <Scene
              key="loginOwner"
              component={LoginScreenOwner}
              title="LoginScreenOwner"
              hideNavBar
            />
            <Scene
              key="loginCompany"
              component={LoginScreenCompany}
              title="LoginScreenCompany"
              hideNavBar
            />
          </Stack>
          <Tabs
            key="tabbar"
            routeName="tabbar"
            style={{ backgroundColor: theme.WHITE }}
            onTabOnPress={() => {
              console.log('Back to initial and also print this');
            }}
            showLabel={false}
            hideNavBar
          >
            <Stack icon={TabIcon} iconName="home" key="homeTab" initial>
              <Scene
                key="homeScreen"
                component={HomeScreen}
                title="HomeScreen"
                hideNavBar
              />
            </Stack>
            <Scene
              icon={TabIcon}
              iconName="magnify"
              key="searchScreen"
              component={SearchScreen}
              title="SearchScreen"
              hideNavBar
            />
            <Stack icon={TabIcon} iconName="wall" key="wallScreen">

              <Scene
                  icon={TabIcon}
                  iconName="wall"
                  key="wallMain"
                  component={WallScreen}
                  title="WallScreen"
                  hideNavBar
                  initial
              />


            </Stack>
            <Scene
              icon={TabIcon}
              iconName="heart"
              key="favoriteScreen"
              component={FavoriteScreen}
              title="FavoriteScreen"
              hideNavBar
            />
            <Stack icon={TabIcon} iconName="account-outline" key="accountTab">
              <Scene
                icon={TabIcon}
                key="settingUSERScreen"
                component={SettingScreen}
                title="SettingUSERScreen"
                hideNavBar
              />
              <Scene
                icon={TabIcon}
                key="myProfileScreen"
                component={MyProfileScreen}
                title="MyProfileScreen"
                hideNavBar
              />
              <Scene
                icon={TabIcon}
                key="editPropertyScreen"
                component={EditPropertyScreen}
                title="EditPropertyScreen"
                hideNavBar
              />
              <Scene
                icon={TabIcon}
                key="myPropertyScreen"
                component={MyPropertyScreen}
                title="MyPropertyScreen"
                hideNavBar
              />
              <Scene
                icon={TabIcon}
                key="myPostWalletScreen"
                component={MyPostWalletScreen}
                title="MyPostWalletScreen"
                hideNavBar
              />

              <Scene
                icon={TabIcon}
                key="myCompanyScreen"
                component={MyCompanyScreen}
                title="My Company Screen"
                hideNavBar
              />
              <Scene
                key="addNewPostScreen"
                component={AddNewPostScreen}
                title="New Post"
                hideNavBar
              />
            </Stack>
          </Tabs>
          <Scene
            key="retailPageScreen"
            component={RetailPageScreen}
            title="RetailPageScreen"
            hideNavBar
          />
          <Scene
            key="addNewPropertyScreen"
            component={AddNewPropertyScreen}
            title="AddNewPropertyScreen"
            hideNavBar
          />
          <Scene
              key="postScreen"
              component={PostScreen}
              title="PostScreen"
              hideNavBar

          />
          <Scene
            icon={TabIcon}
            key="companyScreen"
            component={CompanyScreen}
            title="CompanyScreen"
            hideNavBar
          />
          <Scene
            key="getPosition"
            component={GetPosition}
            title="GetPosition"
            hideNavBar
          />
          <Scene
            key="ownerPageScreen"
            component={OwnerPageScreen}
            title="OwnerPageScreen"
            hideNavBar
          />
          <Scene
            key="paymentPlanScreen"
            component={PaymentPlanScreen}
            title="PaymentPlanScreen"
            hideNavBar
          />
          <Scene
            key="doPayment"
            component={DoPayment}
            title="DoPayment"
            hideNavBar
          />
        </Scene>
      </Router>
    </PersistGate>
  </Provider>
);
export default (MyApp = AppNavigator);
