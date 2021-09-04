import * as React from 'react';
import { Appearance } from 'react-native';
import WrappedText from 'react-native-wrapped-text';
import styled, { css } from '@emotion/native';

import InfoItemView from '../../../components/InfoItemView';

const colorScheme = Appearance.getColorScheme();

const AirInfo = styled.Text({
  lineHeight: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

const Description = styled.Text({
  paddingVertical: 20,
  lineHeight: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

const Reference = styled.View({
  marginTop: 20,
});

const ReferenceItemMain = styled.Text({
  paddingBottom: 5,
  fontFamily: 'SpoqaHanSansNeo-bold',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const ReferenceItemSub = styled.Text({
  paddingBottom: 10,
  fontFamily: 'SpoqaHanSansNeo-regular',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

function DataWeather({ navigation, route }) {
  const goNavigation = () => {
    navigation.navigate('datas');
  };

  return (
    <InfoItemView
      currentTitle={'날씨 데이터'}
      onPress={goNavigation}
    >
      <AirInfo>데이터 갱신 매 3시간 0분</AirInfo>
      <Description>OpenWeather provides historical, current and forecasted weather data via light-speed APIs.</Description>
      <Reference>
        <ReferenceItemMain>발표: 기상청</ReferenceItemMain>
        <ReferenceItemSub>http://www.weather.go.kr/weather/forecast/timeseries.jsp</ReferenceItemSub>
        <ReferenceItemMain>제공: Open Weather</ReferenceItemMain>
        <ReferenceItemSub>https://openweathermap.org</ReferenceItemSub>
      </Reference>
    </InfoItemView>
  )
}

export default DataWeather;
