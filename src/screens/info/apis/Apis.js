import * as React from 'react';
import { Appearance } from 'react-native';
import styled, { css } from '@emotion/native';

import InfoItemView from '../../../components/InfoItemView';

const colorScheme = Appearance.getColorScheme();

const List = styled.View({
  marginBottom: 10,
});

const ApiName = styled.Text({
  paddingBottom: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 16,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const Term = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const Description = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 12,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const Copyright = styled.Text({
  paddingTop: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 10,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const Reference = styled.View({
  marginTop: 20,
});

const ReferenceTitle = styled.Text({
  paddingBottom: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 18,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
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

const HorizontalLine = styled.View({
  marginVertical: 20,
  height: 1,
  backgroundColor: '#8e8e93',
});

function Apis({ navigation, route }) {
  const goNavigation = () => {
    navigation.navigate('info');
  };

  return (
    <InfoItemView
      currentTitle={'APIs'}
      onPress={goNavigation}
    >
      <ApiName>Vworld Geocoder API 2.0</ApiName>
      <List>
        <Term>Service URI</Term>
        <Description>https://www.vworld.kr</Description>
      </List>
      <Copyright>Copyright © 2012~2019. Open Platform All Rights Reserved.</Copyright>
      <HorizontalLine />
      <ApiName>Air Quality Programmatic APIs</ApiName>
      <List>
        <Term>Service URI</Term>
        <Description>https://aqicn.org/api</Description>
      </List>
      <Copyright>provided by the World Air Quality Index project.</Copyright>
      <Reference>
        <ReferenceTitle>API References</ReferenceTitle>
        <ReferenceItemMain>- 대기오염실시간공개시스템</ReferenceItemMain>
        <ReferenceItemSub>   - https://www.airkorea.or.kr</ReferenceItemSub>
        <ReferenceItemMain>- 서울특별시 기후대기환경정보</ReferenceItemMain>
        <ReferenceItemSub>   - https://cleanair.seoul.go.kr</ReferenceItemSub>
      </Reference>
      <HorizontalLine />
      <ApiName>굿바이★로나</ApiName>
      <List>
        <Term>Service URI</Term>
        <Description>https://api.corona-19.kr</Description>
      </List>
      <Copyright>© 2020-2021 굿바이★로나(Goodbye-★★rona).{"\n"}* API 공식 명칭은 불가피하게 일부를 마스킹하였습니다.</Copyright>
      <Reference>
        <ReferenceTitle>API References</ReferenceTitle>
        <ReferenceItemMain>- 대한민국 보건복지부</ReferenceItemMain>
        <ReferenceItemSub>   - http://www.mohw.go.kr{"\n"}   - http://ncov.mohw.go.kr</ReferenceItemSub>
      </Reference>
      <HorizontalLine />
      <ApiName>Open Weather Map API</ApiName>
      <List>
        <Term>Service URI</Term>
        <Description>https://openweathermap.org</Description>
      </List>
      <Copyright>OpenWeather ® All rights reserved</Copyright>
    </InfoItemView>
  )
}

export default Apis;
