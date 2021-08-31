import * as React from 'react';
import { isSameDay } from 'date-fns';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from '@emotion/native';

import weatherDescription from '../../../constants/weatherDescription.js';
import weatherGradient from '../../../constants/weatherGradient.js';
import weatherIcon from '../../../constants/weatherIcon.js';
import weatherMain from '../../../constants/weatherMain.js';

import Location from '../summary/Location';
import CurrentAir from '../summary/CurrentAir';
import CurrentVirus from '../summary/CurrentVirus';

const status = getStatusBarHeight(true);
if (isIphoneX()) {
  screenHeight = Dimensions.get('window').height - status;
  statusBarHeight = status;
  bottomSpaceHeight = getBottomSpace();
  radius = 45;
  radiusHeight = statusBarHeight + 45;
  radiusMinus = -45;
}
else {
  screenHeight = Dimensions.get('window').height;
  statusBarHeight = 0;
  bottomSpaceHeight = 0;
  radius = 0;
  radiusHeight = 0;
  radiusMinus = 0;
}

const StatusGradient = styled.View({
  height: radiusHeight,
  backgroundColor: '#FFFFFF',
});

const Backgrounds = styled(LinearGradient)({
  width: '100%',
  height: screenHeight,
  borderTopLeftRadius: radius,
  borderTopRightRadius: radius,
  marginTop: radiusMinus,
});

const CurrentView = styled.View({
  flex: 1,
});

const Header = styled.View({
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingRight: 10,
  paddingBottom: 60,
  paddingLeft: 30,
});

const DustInfo = styled.View({
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentDustWrapper = styled.View({
  paddingVertical: 20,
  paddingHorizontal: 30,
  backgroundColor: '#FFFFFF',
});

const WeatherWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
});

const TextWrapper = styled.View();

const DustMark = styled.View({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 12,
  opacity: .5,
});

const SmallIcon = styled.Text({
  paddingTop: 2,
  paddingRight: 10,
  fontFamily: 'aris-condition-icons',
  fontSize: 20,
});

const Dust = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const TempCurrent = styled.Text({
  paddingLeft: 10,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 20,
});

const TempToday = styled.Text({
  opacity: .7,
  paddingLeft: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
});

const ConditionDescription = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 18,
});

const DustIconView = styled.View({
  width: 200,
  height: 200,
  position: 'absolute',
  bottom: 0,
  right: 0,
  overflow: 'hidden',
  zIndex: 99999,
});

const LargeIcon = styled.Text({
  fontFamily: 'aris-condition-icons',
  fontSize: 320,
  color: '#FFFFFF',
});

const CurrentDust = ({ forecast: { list, timezone } }) => {
  const currentWeather = list.filter((day) => {
    const now = new Date().getTime() + Math.abs(timezone * 1000);
    const currentDate = new Date(day.dt * 1000);
    return isSameDay(now, currentDate);
  });

  return (
    currentWeather.length > 0 && (
      <>
        <StatusGradient
          style={{ backgroundColor: weatherGradient[currentWeather[0].weather[0].icon][1] }}
        />
        <Backgrounds colors={weatherGradient[currentWeather[0].weather[0].icon]}>
          <Header>
            <Location />
          </Header>
          <CurrentView>
            <CurrentAir />
            <CurrentVirus />
            <DustInfo>
              <CurrentDustWrapper>
                <WeatherWrapper>
                  <SmallIcon
                    style={{ color: weatherGradient[currentWeather[0].weather[0].icon][0] }}
                  >
                    {weatherIcon[currentWeather[0].weather[0].icon]}
                  </SmallIcon>
                  <TextWrapper>
                    <DustMark
                      style={{ backgroundColor: weatherGradient[currentWeather[0].weather[0].icon][1] }}
                    />
                    <Dust>{weatherMain[currentWeather[0].weather[0].id]}</Dust>
                  </TextWrapper>
                  <TempCurrent
                    style={{ color: weatherGradient[currentWeather[0].weather[0].icon][0] }}
                  >
                    {Math.round(currentWeather[0].main.temp)}°C
                  </TempCurrent>
                  <TempToday
                    style={{ color: weatherGradient[currentWeather[0].weather[0].icon][1] }}
                  >
                    {Math.round(currentWeather[0].main.temp_max)}°C
                    {' | '}
                    {Math.round(currentWeather[0].main.temp_min)}°C
                  </TempToday>
                </WeatherWrapper>
                <ConditionDescription
                  style={{ color: weatherGradient[currentWeather[0].weather[0].icon][1] }}
                >
                  {weatherDescription[currentWeather[0].weather[0].id]}
                </ConditionDescription>
              </CurrentDustWrapper>
            </DustInfo>
            <DustIconView><LargeIcon>{weatherIcon[currentWeather[0].weather[0].icon]}</LargeIcon></DustIconView>
          </CurrentView>
        </Backgrounds>
      </>
    )
  )
};

export default CurrentDust;
