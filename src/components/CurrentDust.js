import React from 'react';
import styled, { css } from '@emotion/native';

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

const SmallIcon = styled.Image({
  width: 20,
  height: 20,
});

const Dust = styled.Text({
  paddingRight: 10,
  paddingLeft: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const Temp = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Light',
  fontSize: 20,
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

const CurrentDust = () => {
  return (
    <>
      <DustInfo>
        <CurrentDustWrapper>
          <SmallIcon />
          <Dust>맑음</Dust>
          <Temp>27°C</Temp>
        </CurrentDustWrapper>
      </DustInfo>
      <CurrentCondition>
        <CurrentConditionWrapper>
          <ConditionDescription>양산 쓰고 다니세요</ConditionDescription>
        </CurrentConditionWrapper>
      </CurrentCondition>
    </>
  )
};

export default CurrentDust;
