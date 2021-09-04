import * as React from 'react';
import { Appearance, StyleSheet } from 'react-native';
import WrappedText from 'react-native-wrapped-text';
import styled, { css } from '@emotion/native';

import InfoItemView from '../../../components/InfoItemView';

const colorScheme = Appearance.getColorScheme();

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

function DataVirus({ navigation, route }) {
  const goNavigation = () => {
    navigation.navigate('datas');
  };

  return (
    <InfoItemView
      currentTitle={'바이러스 데이터'}
      onPress={goNavigation}
    >
      <WrappedText
        textStyle={{
          fontFamily: 'SpoqaHanSansNeo-Regular',
          fontSize: 14,
          lineHeight: 20,
          color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
        }}
        containerStyle={{
          paddingVertical: 5,
          alignItems: 'flex-start',
        }}
      >
        - 질병관리청이 매일 발표하는 '바이러스 국내 발생 현황' 보도참고자료 기준(매일 0시 기준, 하루 1회 집계).
      </WrappedText>
      <WrappedText
        textStyle={{
          fontFamily: 'SpoqaHanSansNeo-Regular',
          fontSize: 14,
          lineHeight: 20,
          color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
        }}
        containerStyle={{
          paddingVertical: 5,
          alignItems: 'flex-start',
        }}
      >
        - 집계 수치는 굿바이★로나 API를 통해 제공되며, API의 집계 수치 업데이트가 중앙방역대책본부의 일일 현황 발표보다 지연될 수 있음.
      </WrappedText>
      <WrappedText
        textStyle={{
          fontFamily: 'SpoqaHanSansNeo-Regular',
          fontSize: 14,
          lineHeight: 20,
          color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
        }}
        containerStyle={{
          paddingVertical: 5,
          alignItems: 'flex-start',
        }}
      >
        - API 공식 명칭은 불가피하게 일부를 마스킹.
      </WrappedText>
      <Description>감염이 의심되면 즉시 보건소 및 질병관리청(전화 1339)에 신고 하세요.</Description>
      <Reference>
        <ReferenceItemMain>대한민국 보건복지부:</ReferenceItemMain>
        <ReferenceItemSub>http://www.mohw.go.kr{"\n"}http://ncov.mohw.go.kr</ReferenceItemSub>
        <ReferenceItemMain>중앙방역대책본부:</ReferenceItemMain>
        <ReferenceItemSub>http://www.cdc.go.kr/</ReferenceItemSub>
      </Reference>
    </InfoItemView>
  )
}

export default DataVirus;
