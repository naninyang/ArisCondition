import * as React from 'react';
import { Appearance } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import styled, { css } from '@emotion/native';

const colorScheme = Appearance.getColorScheme();

const status = getStatusBarHeight(true);
if (isIphoneX()) {
  statusBarHeight = status;
  bottomSpaceHeight = getBottomSpace();
}
else {
  statusBarHeight = 0;
  bottomSpaceHeight = 0;
}

const Container = styled.View({
  flex: 1,
  backgroundColor: colorScheme === 'light' || null ? '#f2f2f7' : '#000000',
});

const Header = styled.View({
  flexDirection: 'row',
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderBottomColor: colorScheme === 'light' || null ? '#c6c6c8' : '#707070',
  paddingTop: statusBarHeight,
  justifyContent: 'flex-start',
  backgroundColor: colorScheme === 'light' || null ? '#ffffff' : '#0D0D0D',
});

const Button = styled.TouchableOpacity({
  width: 18,
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonLabel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

const Heading = styled.View({
  flex: 1,
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
});

const HeadingLabel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 17,
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

const Contents = styled.ScrollView({
  margin: 5,
  flex: 1,
});

const Wrapper = styled.View({
  paddingHorizontal: 15,
  paddingTop: 15,
  paddingBottom: bottomSpaceHeight,
});

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
  return (
    <Container>
      <Header>
        <Button onPress={() => { navigation.navigate('info') }}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>APIs</HeadingLabel>
        </Heading>
      </Header>
      <Contents>
        <Wrapper>
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
        </Wrapper>
      </Contents>
    </Container>
  )
}

export default Apis;
