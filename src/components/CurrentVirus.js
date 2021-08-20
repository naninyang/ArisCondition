import React from 'react';
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

function CurrentVirus() {
  return (
    <VirusInfo>
      <CurrentVirusWrapper>
        <Coronic>
          {/* TODO: 코로나19 확진자 JSON 받아오기 */}
          확진자
          1,556명
        </Coronic>
      </CurrentVirusWrapper>
    </VirusInfo>
  )
}

export default CurrentVirus;
