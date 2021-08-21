import * as React from 'react';
import styled, { css } from '@emotion/native';

const AirInfo = styled.View({
  justifyContent: 'flex-start',
  flexDirection: 'row',
  paddingVertical: 10,
});

const CurrentAirWrapper = styled.View({
  padding: 20,
  backgroundColor: '#FFFFFF',
  flexDirection: 'column',
});

const AirInfoWrapper = styled.View({
});

const AirDescription = styled.View({
  flexDirection: 'row',
});

const AirSummary = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
  paddingRight: 10,
});

const AirData = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 20,
  color: 'orange',
});

function CurrentAir() {
  return (
    <AirInfo>
      <CurrentAirWrapper>
        <AirInfoWrapper>
          <AirDescription>
            {/* TODO: 미세먼지 상태 JSON 받아오기 */}
            <AirSummary>미세먼지 좋음</AirSummary>
            <AirData>18㎍/㎥</AirData>
          </AirDescription>
          <AirDescription>
            {/* TODO: 초미세먼지 상태 JSON 받아오기 */}
            <AirSummary>초미세먼지 좋음</AirSummary>
            <AirData>18㎍/㎥</AirData>
          </AirDescription>
        </AirInfoWrapper>
      </CurrentAirWrapper>
    </AirInfo>
  )
}

export default CurrentAir;
