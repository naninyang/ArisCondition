import * as React from 'react';
import { Dimensions } from 'react-native';
import styled, { css } from '@emotion/native';

const screen = Dimensions.get('screen');

const DustInfo = styled.View({
  paddingVertical: 10,
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentDustWrapper = styled.View({
  padding: 20,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row',
});

const SmallIcon = styled.Text({
  paddingTop: 2,
  fontFamily: 'Pe-icon-7-weather',
  fontSize: 20,
  // TODO: 날씨 컨디션에 따라 color 값 나오기 처리하기
  color: 'orange',
});

const Dust = styled.Text({
  paddingRight: 10,
  paddingLeft: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const Temp = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 20,
  // TODO: 날씨 컨디션에 따라 color 값 나오기 처리하기
  color: 'orange',
});

const CurrentCondition = styled.View({
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentConditionWrapper = styled.View({
  padding: 20,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row',
});

const ConditionDescription = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const DustIconView = styled.View({
  width: 170,
  height: 170,
  position: 'absolute',
  top: screen.height - 350,
  right: 0,
  overflow: 'hidden',
});

const LargeIcon = styled.Text({
  fontFamily: 'Pe-icon-7-weather',
  fontSize: 320,
  color: '#FFFFFF',
});

const CurrentDust = () => {
  return (
    <>
      <DustInfo>
        <CurrentDustWrapper>
          {/* TODO: 날씨 상태, 기온 JSON 받아오기 */}
          <SmallIcon>&#xe60c;</SmallIcon>
          <Dust>맑음</Dust>
          <Temp>27°C</Temp>
        </CurrentDustWrapper>
      </DustInfo>
      <CurrentCondition>
        <CurrentConditionWrapper>
          {/* TODO: 날씨 메시지 JSON 받아오기 */}
          <ConditionDescription>양산 쓰고 다니세요</ConditionDescription>
        </CurrentConditionWrapper>
      </CurrentCondition>
      {/* TODO: 날씨 컨디션에 따라 code 값 나오기 처리하기 */}
      <DustIconView><LargeIcon>&#xe60c;</LargeIcon></DustIconView>
    </>
  )
};

export default CurrentDust;
