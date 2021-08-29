import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from '@emotion/native';

const VirusInfo = styled.View({
  paddingVertical: 10,
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentVirusWrapper = styled.View({
  paddingHorizontal: 20,
  paddingTop: 20,
  paddingBottom: 18,
  backgroundColor: '#FFFFFF',
});

const CoronicWrapper = styled.View({
  flexDirection: 'row',
  marginBottom: 5,
})

const TextWrapper = styled.View({
  flexDirection: 'row',
});

const CoronicIcon = styled.Text({
  paddingRight: 10,
  fontFamily: 'aris-condition-icons',
  fontSize: 20,
  color: '#000000',
});

const CoronicMark = styled.View({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 12,
  backgroundColor: '#FF1744',
  opacity: .5,
});

const Coronic = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

const CoronicLevel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 18,
  color: '#FF1744',
})

const API_URL = 'https://api.corona-19.kr/korea/country/new/';
const API_KEY = 'DTaPkp9GZRn3cAvrmJCgEIH2uVK1Odqt5';

const DISTANCING = 'https://naninyang.github.io/api/VirusDistancing.json'

function CurrentVirus() {
  const [coronic, setCoronic] = React.useState(null);
  const [distance, setDistance] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${API_URL}?serviceKey=${API_KEY}`).then((response) => {
      setCoronic(response.data);
    });
    axios.get(`${DISTANCING}`).then((response) => {
      setDistance(response.data);
    });
  }, []);

  if (!coronic) return null;
  if (!distance) return null;

  return (
    <VirusInfo>
      <CurrentVirusWrapper>
        <CoronicWrapper>
          <TextWrapper>
            <CoronicIcon>&#xea00;</CoronicIcon>
            <Coronic>
              확진자
              {' '}
            </Coronic>
          </TextWrapper>
          <TextWrapper>
            <CoronicMark />
            <Coronic>{coronic.korea.newCase}명</Coronic>
          </TextWrapper>
        </CoronicWrapper>
        <CoronicLevel>수도권 거리두기 {distance.metropolitan}단계</CoronicLevel>
        <CoronicLevel>비수도권 거리두기 {distance.other}단계</CoronicLevel>
      </CurrentVirusWrapper>
    </VirusInfo>
  );
}
export default CurrentVirus;
