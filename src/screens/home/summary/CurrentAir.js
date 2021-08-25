import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const API_URL = 'https://api.waqi.info/feed/geo:37.5576695;126.95906/';
const API_KEY = '44c176891ebfbf99df09758fc4060341f157c878';

function CurrentAir() {
  const [aqi, setAqi] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${API_URL}?token=${API_KEY}`).then((response) => {
      setAqi(response.data);
    });
  }, []);

  if (!aqi) return null;

  return (
    <AirInfo>
      <CurrentAirWrapper>
        <AirInfoWrapper>
          <AirDescription>
            {/* TODO: 미세먼지 단계에 따라서 아이콘 적용 */}
            {
              (() => {
                if (aqi.data.iaqi.pm10.v < 16) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      최고
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 31) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      좋음
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 41) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      양호
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 51) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      보통
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 76) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      나쁨
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 101) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      상당히 나쁨
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 151) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      매우 나쁨
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v > 150) {
                  return (
                    <AirSummary>
                      미세먼지
                      {' '}
                      최악
                    </AirSummary>
                  )
                }
              })()
            }
            <AirData>{aqi.data.iaqi.pm10.v}㎍/㎥</AirData>
          </AirDescription>
          <AirDescription>
            {
              (() => {
                if (aqi.data.iaqi.pm10.v < 9) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      최고
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 16) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      좋음
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 21) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      양호
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 26) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      보통
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 38) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      나쁨
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 51) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      상당히 나쁨
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 76) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      매우 나쁨
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v > 75) {
                  return (
                    <AirSummary>
                      초미세먼지
                      {' '}
                      최악
                    </AirSummary>
                  )
                }
              })()
            }
            <AirData>{aqi.data.iaqi.pm25.v}㎍/㎥</AirData>
          </AirDescription>
        </AirInfoWrapper>
      </CurrentAirWrapper>
    </AirInfo>
  )
}

export default CurrentAir;
