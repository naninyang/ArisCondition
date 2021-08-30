import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY_AIR, API_URL_AIR } from "@env";
import styled, { css } from '@emotion/native';

const AirInfo = styled.View({
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentAirWrapper = styled.View({
  paddingHorizontal: 20,
  paddingTop: 18,
  paddingBottom: 14,
  backgroundColor: '#FFFFFF',
  flexDirection: 'column',
});

const AirInfoWrapper = styled.View();

const AirDescription = styled.View({
  flexDirection: 'row',
  marginVertical: 2,
});

const AirSummary = styled.Text({
  paddingRight: 10,
});

const AirIcon = styled.Text({
  paddingRight: 10,
  fontFamily: 'aris-condition-icons',
  fontSize: 20,
  color: '#000000',
});

const AirText = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const TextWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-start',
});

const AirMark = styled.View({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 12,
  opacity: .5,
});

const AirData = styled.Text({
  marginTop: -2,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 20,
  color: '#000000',
});

function CurrentAir() {
  const [aqi, setAqi] = React.useState(null);
  const point = `37.5576695;126.95906`;

  React.useEffect(() => {
    axios.get(`${API_URL_AIR}:${point}/?token=${API_KEY_AIR}`).then((response) => {
      setAqi(response.data);
    });
  }, []);

  if (!aqi) return null;

  return (
    <AirInfo>
      <CurrentAirWrapper>
        <AirInfoWrapper>
          <AirDescription>
            <AirSummary>
              {/* TODO: 미세먼지 단계에 따라서 아이콘 적용 */}
              {
                (() => {
                  if (aqi.data.iaqi.pm10.v < 16) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb00;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#FFEA00' }} />
                          <AirText>
                            최고
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm10.v < 31) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb01;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#00E676' }} />
                          <AirText>
                            좋음
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm10.v < 41) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb02;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#1DE9B6' }} />
                          <AirText>
                            양호
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm10.v < 51) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb03;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#00B0FF' }} />
                          <AirText>
                            보통
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm10.v < 76) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb10;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#651FFF' }} />
                          <AirText>
                            나쁨
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm10.v < 101) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb11;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#AA00FF' }} />
                          <AirText>
                            상당히 나쁨
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm10.v < 151) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb12;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#C51162' }} />
                          <AirText>
                            매우 나쁨
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb13;</AirIcon>
                          <AirText>
                            미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#FF1744' }} />
                          <AirText>
                            최악
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                })()
              }
            </AirSummary>
            {
              (() => {
                if (aqi.data.iaqi.pm10.v < 16) {
                  return (
                    <AirData style={{ color: '#F57F17' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 31) {
                  return (
                    <AirData style={{ color: '#2E7D32' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 41) {
                  return (
                    <AirData style={{ color: '#006064' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 51) {
                  return (
                    <AirData style={{ color: '#2962FF' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 76) {
                  return (
                    <AirData style={{ color: '#651FFF' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 101) {
                  return (
                    <AirData style={{ color: '#AA00FF' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm10.v < 151) {
                  return (
                    <AirData style={{ color: '#C51162' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
                else {
                  return (
                    <AirData style={{ color: '#FF1744' }}>
                      {aqi.data.iaqi.pm10.v}㎍/㎥
                    </AirData>
                  )
                }
              })()
            }
          </AirDescription>
          <AirDescription>
            <AirSummary>
              {
                (() => {
                  if (aqi.data.iaqi.pm25.v < 9) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb00;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#FFEA00' }} />
                          <AirText>
                            최고
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm25.v < 16) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb01;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#00E676' }} />
                          <AirText>
                            좋음
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm25.v < 21) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb02;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#1DE9B6' }} />
                          <AirText>
                            양호
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm25.v < 26) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb03;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#00B0FF' }} />
                          <AirText>
                            보통
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm25.v < 38) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb10;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#651FFF' }} />
                          <AirText>
                            나쁨
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm25.v < 51) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb11;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#AA00FF' }} />
                          <AirText>
                            상당히 나쁨
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else if (aqi.data.iaqi.pm25.v < 76) {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb12;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#C51162' }} />
                          <AirText>
                            매우 나쁨
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                  else {
                    return (
                      <>
                        <TextWrapper>
                          <AirIcon>&#xeb13;</AirIcon>
                          <AirText>
                            초미세먼지
                            {' '}
                          </AirText>
                        </TextWrapper>
                        <TextWrapper>
                          <AirMark style={{ backgroundColor: '#FF1744' }} />
                          <AirText>
                            최악
                          </AirText>
                        </TextWrapper>
                      </>
                    )
                  }
                })()
              }
            </AirSummary>
            {
              (() => {
                if (aqi.data.iaqi.pm25.v < 9) {
                  return (
                    <AirData style={{ color: '#F57F17' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm25.v < 16) {
                  return (
                    <AirData style={{ color: '#2E7D32' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm25.v < 21) {
                  return (
                    <AirData style={{ color: '#006064' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm25.v < 26) {
                  return (
                    <AirData style={{ color: '#2962FF' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm25.v < 38) {
                  return (
                    <AirData style={{ color: '#651FFF' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm25.v < 51) {
                  return (
                    <AirData style={{ color: '#AA00FF' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
                else if (aqi.data.iaqi.pm25.v < 76) {
                  return (
                    <AirData style={{ color: '#C51162' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
                else {
                  return (
                    <AirData style={{ color: '#FF1744' }}>
                      {aqi.data.iaqi.pm25.v}㎍/㎥
                    </AirData>
                  )
                }
              })()
            }
          </AirDescription>
        </AirInfoWrapper>
      </CurrentAirWrapper>
    </AirInfo>
  )
}

export default CurrentAir;
