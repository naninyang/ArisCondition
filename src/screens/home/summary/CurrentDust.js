import * as React from 'react';
import { isSameDay } from 'date-fns';
import styled, { css } from '@emotion/native';

import weatherDescription from '../../../constants/weatherDescription.js';
import weatherGradient from '../../../constants/weatherGradient.js';
import weatherIcon from '../../../constants/weatherIcon.js';
import weatherMain from '../../../constants/weatherMain.js';

const DustInfo = styled.View({
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentDustWrapper = styled.View({
  padding: 20,
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
      </>
    )
  )
};

export default CurrentDust;
