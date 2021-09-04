import * as React from 'react';
import { Appearance } from 'react-native';
import styled, { css } from '@emotion/native';

import InfoItemView from '../../../components/InfoItemView';

const colorScheme = Appearance.getColorScheme();

const AppNameKorean = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const AppNameEnglish = styled.Text({
  marginTop: 5,
  marginBottom: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const Copyright = styled.View({
  flexDirection: 'row',
  marginVertical: 2,
});

const TextBold = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 10,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const TextRegular = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 10,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

function AppInfo({ navigation, route }) {
  const goNavigation = () => {
    navigation.navigate('info');
  };

  return (
    <InfoItemView
      currentTitle={'앱 정보'}
      onPress={goNavigation}
    >
      <AppNameKorean>아리스 컨디션 v1.0.0</AppNameKorean>
      <AppNameEnglish>ARIS condition v1.0.0</AppNameEnglish>
      <Copyright>
        <TextRegular>Copyright 2021</TextRegular>
        <TextBold>
          {' '}
          ARIS develop,
          {' '}
        </TextBold>
        <TextRegular>All Rights Resevered.</TextRegular>
      </Copyright>
      <Copyright>
        <TextBold>Thanks to code contributors!</TextBold>
      </Copyright>
    </InfoItemView>
  )
}

export default AppInfo;
