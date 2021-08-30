import * as React from 'react';
import { StatusBar, Dimensions, } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from '@emotion/native';

import useWeather from '../../utils/useWeather';

import LoadingDust from '../loading/LoadingDust';

import Location from './summary/Location';
import CurrentAir from './summary/CurrentAir';
import CurrentVirus from './summary/CurrentVirus';
import CurrentDust from './summary/CurrentDust';

const status = getStatusBarHeight(true);
if (isIphoneX()) screenHeight = Dimensions.get('window').height - status - getBottomSpace();
else screenHeight = Dimensions.get('window').height;

const StatusGradient = styled.SafeAreaView({
  flex: 0,
});

const Container = styled.SafeAreaView({
  flex: 1,
});

const Backgrounds = styled(LinearGradient)({
  width: '100%',
  flex: 1,
});

const Contents = styled.ScrollView({
  width: '100%',
});

const Summary = styled.View({
  height: screenHeight,
});

const Header = styled.View({
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingRight: 10,
  paddingBottom: 60,
  paddingLeft: 20,
});

const Button = styled.TouchableOpacity({
  padding: 10,
});

const Label = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const CurrentView = styled.View({
  flex: 1,
});

const Home = ({ navigation, route }) => {
  const weather = useWeather();

  return (
    <>
      <StatusBar hidden={true} />
      <StatusGradient style={{ backgroundColor: '#019ddd' }}></StatusGradient>
      <Container style={{ backgroundColor: '#52C2CD' }}>
        {/* TODO: 날씨 컨디션에 따라 LinearGradient 컬러값 나오기 처리하기 */}
        <Backgrounds colors={['#019ddd', '#52C2CD']}>
          <Contents contentContainerStyle='flex:1'>
            <Summary>
              <Header>
                <Location />
                <Button onPress={() => { navigation.navigate('info'); }}>
                  <Label>정보  &#xE001;</Label>
                </Button>
              </Header>
              <CurrentView>
                <CurrentAir />
                <CurrentVirus />
                {!weather ? <LoadingDust /> : <CurrentDust forecast={weather} />}
              </CurrentView>
            </Summary>
          </Contents>
        </Backgrounds>
      </Container>
    </>
  )
}

export default Home;
