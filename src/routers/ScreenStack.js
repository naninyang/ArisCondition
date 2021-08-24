import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Licenses from '../pages/Info/Licenses/Licenses';
import AppInfo from '../pages/Info/App/AppInfo';
import Apis from '../pages/Info/Apis/Apis';

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
        name='apis'
        component={Apis}
      />
      <HomeStack.Screen
        name='appinfo'
        component={AppInfo}
      />
    </HomeStack.Navigator>
  )
}

export default ScreenStack;
