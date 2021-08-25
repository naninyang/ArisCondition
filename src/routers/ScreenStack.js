import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from '../screens/home/Home';
import Info from '../screens/info/Info';

import Licenses from '../screens/info/licenses/Licenses';
import LicenseReact from '../screens/info/licenses/LicenseReact';
import LicenseReactNative from '../screens/info/licenses/LicenseReactNative';
import LicenseReactNativeGestureHandler from '../screens/info/licenses/LicenseReactNativeGestureHandler';
import LicenseReactNativeLinearGradient from '../screens/info/licenses/LicenseReactNativeLinearGradient';
import LicenseReactNativeSafeAreaContext from '../screens/info/licenses/LicenseReactNativeSafeAreaContext';
import LicenseReactNativeScreens from '../screens/info/licenses/LicenseReactNativeScreens';

import Apis from '../screens/info/apis/Apis';
import ApiVworld from '../screens/info/apis/ApiVworld';
import ApiAqp from '../screens/info/apis/ApiAqp';
import ApiVirus from '../screens/info/apis/ApiVirus';

import AppInfo from '../screens/info/app/AppInfo';

const HomeStack = createStackNavigator();

function ScreenStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name='home'
        component={Home}
      />
      <HomeStack.Screen
        name='info'
        component={Info}
      />

      <HomeStack.Screen
        name='licenses'
        component={Licenses}
      />
      <HomeStack.Screen
        name='licenseReact'
        component={LicenseReact}
      />
      <HomeStack.Screen
        name='licenseReactNative'
        component={LicenseReactNative}
      />
      <HomeStack.Screen
        name='licenseReactNativeGestureHandler'
        component={LicenseReactNativeGestureHandler}
      />
      <HomeStack.Screen
        name='licenseReactNativeLinearGradient'
        component={LicenseReactNativeLinearGradient}
      />
      <HomeStack.Screen
        name='licenseReactNativeSafeAreaContext'
        component={LicenseReactNativeSafeAreaContext}
      />
      <HomeStack.Screen
        name='licenseReactNativeScreens'
        component={LicenseReactNativeScreens}
      />

      <HomeStack.Screen
        name='apis'
        component={Apis}
      />
      <HomeStack.Screen
        name='apiVworld'
        component={ApiVworld}
      />
      <HomeStack.Screen
        name='apiAqp'
        component={ApiAqp}
      />
      <HomeStack.Screen
        name='apiVirus'
        component={ApiVirus}
      />

      <HomeStack.Screen
        name='appinfo'
        component={AppInfo}
      />
    </HomeStack.Navigator>
  )
}

export default ScreenStack;
