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
  flexDirection: 'row',
});

const Coronic = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#000000',
});

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
        <Coronic>
          확진자
          {' '}
          {coronic.korea.newCase}명
        </Coronic>
      </CurrentVirusWrapper>
    </VirusInfo>
  );
}
export default CurrentVirus;
