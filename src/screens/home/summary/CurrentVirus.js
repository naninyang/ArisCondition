import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from '@emotion/native';

const VirusInfo = styled.View({
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentVirusWrapper = styled.View({
  padding: 20,
  backgroundColor: '#FFFFFF',
});

const CoronicWrapper = styled.View({
  flexDirection: 'row',
  marginBottom: 5,
})

const TextWrapper = styled.View();

const CoronicMark = styled.View({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 12,
  backgroundColor: 'pink',
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

function CurrentVirus() {
  const [coronic, setCoronic] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${API_URL}?serviceKey=${API_KEY}`).then((response) => {
      setCoronic(response.data);
    });
  }, []);

  if (!coronic) return null;

  return (
    <VirusInfo>
      <CurrentVirusWrapper>
        <CoronicWrapper>
          <TextWrapper>
            <Coronic>
              {/* TODO: 수도권 사회적거리두기 단계 표기 */}
              확진자
              {' '}
            </Coronic>
          </TextWrapper>
          <TextWrapper>
            <CoronicMark />
            <Coronic>
              {coronic.korea.newCase}명
            </Coronic>
          </TextWrapper>
        </CoronicWrapper>
        <CoronicLevel>
          수도권 거리두기 4단계
        </CoronicLevel>
        <CoronicLevel>
          비수도권 거리두기 3단계
        </CoronicLevel>
      </CurrentVirusWrapper>
    </VirusInfo>
  );
}
export default CurrentVirus;
