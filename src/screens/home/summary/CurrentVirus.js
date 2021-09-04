import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL_VIRUS, API_KEY_VIRUS, API_URL_DISTANCING } from "@env";
import styled, { css } from '@emotion/native';

const VirusInfo = styled.View({
  paddingVertical: 10,
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

const CurrentVirusWrapper = styled.View({
  paddingHorizontal: 30,
  paddingTop: 20,
  paddingBottom: 18,
  backgroundColor: '#FFFFFF',
});

const CoronicWrapper = styled.View({
  flexDirection: 'row',
  marginBottom: 5,
});

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
});

const CoronicMessage = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 18,
  color: "#F57F17",
});

function CurrentVirus() {
  const [coronic, setCoronic] = React.useState(null);
  const [distance, setDistance] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${API_URL_VIRUS}?serviceKey=${API_KEY_VIRUS}`).then((response) => {
      setCoronic(response.data);
    });
    axios.get(`${API_URL_DISTANCING}`).then((response) => {
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
        {
          (() => {
            if (distance.status === true) {
              return (
                <>
                  <CoronicLevel>수도권 거리두기 {distance.metropolitan}단계</CoronicLevel>
                  <CoronicLevel>비수도권 거리두기 {distance.other}단계</CoronicLevel>
                </>
              )
            }
            else {
              return (
                <>
                  <CoronicMessage>{distance.message}</CoronicMessage>
                </>
              )
            }
          })()
        }
      </CurrentVirusWrapper>
    </VirusInfo>
  );
}
export default CurrentVirus;
