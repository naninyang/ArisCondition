import React from 'react';
import styled, { css } from '@emotion/native';

const Container = styled.SafeAreaView({
  flex: 1,
});

const Text = styled.Text({

});

function Info({ naviation }) {
  return (
    <Container>
      {/* TODO: 헤더(뒤로가기 버튼, 정보 타이틀), 목록 작업하기 */}
      <Text>정보</Text>
    </Container>
  )
}

export default Info;
