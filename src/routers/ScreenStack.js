import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../pages/Home';
import Info from '../pages/Info';

import Licenses from '../pages/Info/Licenses/Licenses';
import LicenseReact from '../pages/Info/Licenses/LicenseReact';
import LicenseReactNative from '../pages/Info/Licenses/LicenseReactNative';
import LicenseReactNativeGestureHandler from '../pages/Info/Licenses/LicenseReactNativeGestureHandler';
import LicenseReactNativeLinearGradient from '../pages/Info/Licenses/LicenseReactNativeLinearGradient';
import LicenseReactNativeSafeAreaContext from '../pages/Info/Licenses/LicenseReactNativeSafeAreaContext';
import LicenseReactNativeScreens from '../pages/Info/Licenses/LicenseReactNativeScreens';

import Apis from '../pages/Info/Apis/Apis';
import ApiVworld from '../pages/Info/Apis/ApiVworld';
import ApiAqp from '../pages/Info/Apis/ApiAqp';
import ApiVirus from '../pages/Info/Apis/ApiVirus';

import AppInfo from '../pages/Info/App/AppInfo';

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
