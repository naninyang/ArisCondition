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
      <Text>정보</Text>
    </Container>
  )
}

export default Info;
