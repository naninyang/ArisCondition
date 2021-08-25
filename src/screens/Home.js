import * as React from 'react';
import { StatusBar, Dimensions, } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from '@emotion/native';

import useLocation from '../utils/useLocation';

import Location from "./home/summary/Location";
import CurrentAir from './home/summary/CurrentAir';
import CurrentVirus from './home/summary/CurrentVirus';
import CurrentDust from './home/summary/CurrentDust';

const status = getStatusBarHeight(true);
if (isIphoneX()) screenHeight = Dimensions.get('window').height - status - getBottomSpace();
else screenHeight = Dimensions.get('window').height;

const StatusGradient = styled.SafeAreaView({
  flex: 0,
  backgroundColor: '#FF4E50',
});

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: '#F9D423',
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
  // height: 812,
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
  const location = useLocation();

  return (
    <>
      <StatusBar hidden={true} />
      <StatusGradient></StatusGradient>
      <Container>
        {/* TODO: 날씨 컨디션에 따라 LinearGradient 컬러값 나오기 처리하기 */}
        <Backgrounds colors={['#FF4E50', '#F9D423']}>
          <Contents contentContainerStyle="flex:1">
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
                <CurrentDust />
              </CurrentView>
            </Summary>
          </Contents>
        </Backgrounds>
      </Container>
    </>
  )
}

export default Home;
