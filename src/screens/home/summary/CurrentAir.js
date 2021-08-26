import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from '@emotion/native';

const AirInfo = styled.View({
  justifyContent: 'flex-start',
  flexDirection: 'row',
  paddingVertical: 10,
});

const CurrentAirWrapper = styled.View({
  paddingHorizontal: 20,
  paddingTop: 18,
  paddingBottom: 16,
  backgroundColor: '#FFFFFF',
  flexDirection: 'column',
});

const AirInfoWrapper = styled.View({
});

const AirDescription = styled.View({
  flexDirection: 'row',
  marginVertical: 2,
});

const AirSummary = styled.Text({
  paddingRight: 10,
});

const AirText = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const TextWrapper = styled.View();

const AirMark = styled.View({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 12,
  backgroundColor: 'pink',
});

const AirData = styled.Text({
  marginTop: -2,
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
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          최고
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 31) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          좋음
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 41) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          양호
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 51) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          보통
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 76) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          나쁨
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 101) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          상당히 나쁨
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 151) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          매우 나쁨
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v > 150) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          최악
                        </AirText>
                      </TextWrapper>
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
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          최고
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 16) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          좋음
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 21) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          양호
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 26) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          보통
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 38) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          나쁨
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 51) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          상당히 나쁨
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 76) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          매우 나쁨
                        </AirText>
                      </TextWrapper>
                    </AirSummary>
                  )
                }
                else if (aqi.data.iaqi.pm10.v > 75) {
                  return (
                    <AirSummary>
                      <TextWrapper>
                        <AirText>
                          초미세먼지
                          {' '}
                        </AirText>
                      </TextWrapper>
                      <TextWrapper>
                        <AirMark />
                        <AirText>
                          최악
                        </AirText>
                      </TextWrapper>
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
