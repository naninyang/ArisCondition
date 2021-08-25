import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from '../pages/Home';
import Info from '../pages/Info';

import Licenses from '../pages/info/licenses/Licenses';
import LicenseReact from '../pages/info/licenses/LicenseReact';
import LicenseReactNative from '../pages/info/licenses/LicenseReactNative';
import LicenseReactNativeGestureHandler from '../pages/info/licenses/LicenseReactNativeGestureHandler';
import LicenseReactNativeLinearGradient from '../pages/info/licenses/LicenseReactNativeLinearGradient';
import LicenseReactNativeSafeAreaContext from '../pages/info/licenses/LicenseReactNativeSafeAreaContext';
import LicenseReactNativeScreens from '../pages/info/licenses/LicenseReactNativeScreens';

import Apis from '../pages/info/apis/Apis';
import ApiVworld from '../pages/info/apis/ApiVworld';
import ApiAqp from '../pages/info/apis/ApiAqp';
import ApiVirus from '../pages/info/apis/ApiVirus';

import AppInfo from '../pages/info/app/AppInfo';

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
