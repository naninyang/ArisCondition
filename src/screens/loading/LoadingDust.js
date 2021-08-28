import * as React from 'react';
import styled, { css } from '@emotion/native';

const LoadingDust = styled.View({
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

const Dust = () => {
  return (
    <LoadingDust>
      <CurrentConditionWrapper>
        <ConditionDescription>날씨를 불러오는 중입니다...</ConditionDescription>
      </CurrentConditionWrapper>
    </LoadingDust>
  )
};

export default Dust;
