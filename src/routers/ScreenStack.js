import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from '../screens/home/Home';
import Info from '../screens/info/Info';

import Donate from '../screens/info/donate/Donate';

import Licenses from '../screens/info/licenses/Licenses';
import ReactFacebook from '../screens/info/licenses/ReactFacebook';
import ReactNative from '../screens/info/licenses/ReactNative';
import ReactNativeGestureHandler from '../screens/info/licenses/ReactNativeGestureHandler';
import ReactNativeLinearGradient from '../screens/info/licenses/ReactNativeLinearGradient';
import ReactNativeSafeAreaContext from '../screens/info/licenses/ReactNativeSafeAreaContext';
import ReactNativeScreens from '../screens/info/licenses/ReactNativeScreens';

import Apis from '../screens/info/apis/Apis';

import Datas from '../screens/info/datas/Datas';
import DataAqp from '../screens/info/datas/DataAqp';
import DataVirus from '../screens/info/datas/DataVirus';
import DataWeather from '../screens/info/datas/DataWeather';

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
        name='donate'
        component={Donate}
      />

      <HomeStack.Screen
        name='licenses'
        component={Licenses}
      />
      <HomeStack.Screen
        name='reactFacebook'
        component={ReactFacebook}
      />
      <HomeStack.Screen
        name='reactNative'
        component={ReactNative}
      />
      <HomeStack.Screen
        name='reactNativeGestureHandler'
        component={ReactNativeGestureHandler}
      />
      <HomeStack.Screen
        name='reactNativeLinearGradient'
        component={ReactNativeLinearGradient}
      />
      <HomeStack.Screen
        name='reactNativeSafeAreaContext'
        component={ReactNativeSafeAreaContext}
      />
      <HomeStack.Screen
        name='reactNativeScreens'
        component={ReactNativeScreens}
      />

      <HomeStack.Screen
        name='apis'
        component={Apis}
      />

      <HomeStack.Screen
        name='datas'
        component={Datas}
      />
      <HomeStack.Screen
        name='dataAqp'
        component={DataAqp}
      />
      <HomeStack.Screen
        name='dataVirus'
        component={DataVirus}
      />
      <HomeStack.Screen
        name='dataWeather'
        component={DataWeather}
      />

      <HomeStack.Screen
        name='appinfo'
        component={AppInfo}
      />
    </HomeStack.Navigator>
  )
}

export default ScreenStack;
