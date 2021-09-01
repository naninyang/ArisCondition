import * as React from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import styled, { css } from '@emotion/native';

import useWeather from '../../utils/useWeather';
import LoadingDust from '../loading/LoadingDust';
import CurrentDust from './summary/CurrentDust';

const status = getStatusBarHeight(true);
if (isIphoneX()) statusBarHeight = status;
else statusBarHeight = 0;

const Contents = styled.ScrollView({
  width: '100%',
});

const Button = styled.TouchableOpacity({
  marginTop: 10,
  padding: 10,
  position: 'absolute',
  zIndex: 9999,
  top: statusBarHeight,
  right: 20,
});

const Label = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const Summary = styled.View({
  height: screenHeight,
});

const Home = ({ navigation, route }) => {
  const weather = useWeather();

  return (
    <>
      <StatusBar
        hidden={true}
        animated={true}
        StatusBarAnimation={'slide'}
      />
      <Contents contentContainerStyle='flex:1'>
        <Summary>
          <Button onPress={() => { navigation.navigate('info'); }}>
            <Label>정보  &#xE001;</Label>
          </Button>
          {!weather ? <LoadingDust /> : <CurrentDust forecast={weather} />}
        </Summary>
      </Contents>
    </>
  )
}

export default Home;
