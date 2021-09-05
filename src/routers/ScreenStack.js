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
import AxiosJs from '../screens/info/licenses/AxiosJs';
import BabelJest from '../screens/info/licenses/BabelJest';
import DateFns from '../screens/info/licenses/DateFns';
import EslintTool from '../screens/info/licenses/EslintTool';
import Jest from '../screens/info/licenses/Jest';
import LodashJs from '../screens/info/licenses/LodashJs';
import MetroReactNativeBabelPreset from '../screens/info/licenses/MetroReactNativeBabelPreset';
import ReactNativeCodegen from '../screens/info/licenses/ReactNativeCodegen';
import ReactNativeDotenv from '../screens/info/licenses/ReactNativeDotenv';
import ReactNativeInappbrowserReborn from '../screens/info/licenses/ReactNativeInappbrowserReborn';
import ReactNativeIphoneXHelper from '../screens/info/licenses/ReactNativeIphoneXHelper';
import ReactNativeStatusBarHeight from '../screens/info/licenses/ReactNativeStatusBarHeight';
import ReactNativeTableComponent from '../screens/info/licenses/ReactNativeTableComponent';
import ReactNativeUuid from '../screens/info/licenses/ReactNativeUuid';
import ReactTestRenderer from '../screens/info/licenses/ReactTestRenderer';
import BabelCore from '../screens/info/licenses/@babel/BabelCore';
import BabelRuntime from '../screens/info/licenses/@babel/BabelRuntime';
import EmotionReactFacebook from '../screens/info/licenses/@emotion/EmotionReactFacebook';
import EmotionReactNative from '../screens/info/licenses/@emotion/EmotionReactNative';
import ReactNativeAsyncStorage from '../screens/info/licenses/@react-native-async-storage/ReactNativeAsyncStorage';
import EslintConfig from '../screens/info/licenses/@react-native-community/EslintConfig';
import ReactNativeCommunityGeolocation from '../screens/info/licenses/@react-native-community/ReactNativeCommunityGeolocation';
import ReactNavigationNative from '../screens/info/licenses/@react-navigation/ReactNavigationNative';
import ReactNavigationNativeStack from '../screens/info/licenses/@react-navigation/ReactNavigationNativeStack';
import ReactStack from '../screens/info/licenses/@react-navigation/ReactStack';

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
        name='axiosJs'
        component={AxiosJs}
      />
      <HomeStack.Screen
        name='babelJest'
        component={BabelJest}
      />
      <HomeStack.Screen
        name='dateFns'
        component={DateFns}
      />
      <HomeStack.Screen
        name='eslintTool'
        component={EslintTool}
      />
      <HomeStack.Screen
        name='jest'
        component={Jest}
      />
      <HomeStack.Screen
        name='lodashJs'
        component={LodashJs}
      />
      <HomeStack.Screen
        name='metroReactNativeBabelPreset'
        component={MetroReactNativeBabelPreset}
      />
      <HomeStack.Screen
        name='reactNativeCodegen'
        component={ReactNativeCodegen}
      />
      <HomeStack.Screen
        name='reactNativeDotenv'
        component={ReactNativeDotenv}
      />
      <HomeStack.Screen
        name='reactNativeInappbrowserReborn'
        component={ReactNativeInappbrowserReborn}
      />
      <HomeStack.Screen
        name='reactNativeIphoneXHelper'
        component={ReactNativeIphoneXHelper}
      />
      <HomeStack.Screen
        name='reactNativeStatusBarHeight'
        component={ReactNativeStatusBarHeight}
      />
      <HomeStack.Screen
        name='reactNativeTableComponent'
        component={ReactNativeTableComponent}
      />
      <HomeStack.Screen
        name='reactNativeUuid'
        component={ReactNativeUuid}
      />
      <HomeStack.Screen
        name='reactTestRenderer'
        component={ReactTestRenderer}
      />
      <HomeStack.Screen
        name='babelCore'
        component={BabelCore}
      />
      <HomeStack.Screen
        name='babelRuntime'
        component={BabelRuntime}
      />
      <HomeStack.Screen
        name='emotionReactFacebook'
        component={EmotionReactFacebook}
      />
      <HomeStack.Screen
        name='emotionReactNative'
        component={EmotionReactNative}
      />
      <HomeStack.Screen
        name='reactNativeAsyncStorage'
        component={ReactNativeAsyncStorage}
      />
      <HomeStack.Screen
        name='eslintConfig'
        component={EslintConfig}
      />
      <HomeStack.Screen
        name='reactNativeCommunityGeolocation'
        component={ReactNativeCommunityGeolocation}
      />
      <HomeStack.Screen
        name='reactNavigationNative'
        component={ReactNavigationNative}
      />
      <HomeStack.Screen
        name='reactNavigationNativeStack'
        component={ReactNavigationNativeStack}
      />
      <HomeStack.Screen
        name='reactStack'
        component={ReactStack}
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
