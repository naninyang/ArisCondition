import * as React from 'react';
import { isSameDay } from 'date-fns';
import styled, { css } from '@emotion/native';

import weatherMain from '../../../constants/weatherMain.js';
import weatherDescription from '../../../constants/weatherDescription.js';

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
  marginBottom: 10,
});

const TextWrapper = styled.View();

const DustMark = styled.View({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 12,
  backgroundColor: 'pink',
});

const SmallIcon = styled.Text({
  paddingTop: 2,
  paddingRight: 10,
  fontFamily: 'Pe-icon-7-weather',
  fontSize: 20,
  // TODO: 날씨 컨디션에 따라 color 값 나오기 처리하기
  color: 'orange',
});

const Dust = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const Temp = styled.Text({
  paddingLeft: 10,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 20,
  // TODO: 날씨 컨디션에 따라 color 값 나오기 처리하기
  color: 'orange',
});

const ConditionDescription = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 18,
  // TO-DO: 날씨 컨디션에 따라 code 값 나오기 처리하기
  color: '#000000',
});

const DustIconView = styled.View({
  width: 170,
  height: 170,
  position: 'absolute',
  bottom: 0,
  right: 0,
  overflow: 'hidden',
  zIndex: 99999,
});

const LargeIcon = styled.Text({
  fontFamily: 'Pe-icon-7-weather',
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
              {/* TODO: 날씨 상태, 기온 JSON 받아오기 */}
              <SmallIcon>&#xe60c;</SmallIcon>
              <TextWrapper>
                <DustMark />
                <Dust>{weatherMain[currentWeather[0].weather[0].id]}</Dust>
              </TextWrapper>
              <Temp>{Math.round(currentWeather[0].main.temp)}°C</Temp>
            </WeatherWrapper>
            <ConditionDescription>{weatherDescription[currentWeather[0].weather[0].id]}</ConditionDescription>
          </CurrentDustWrapper>
        </DustInfo>
        {/* TODO: 날씨 컨디션에 따라 code 값 나오기 처리하기 */}
        <DustIconView><LargeIcon>&#xe60c;</LargeIcon></DustIconView>
      </>
    )
  )
};

export default CurrentDust;
