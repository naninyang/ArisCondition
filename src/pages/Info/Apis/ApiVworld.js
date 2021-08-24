import * as React from 'react';
import styled, { css } from '@emotion/native';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: '#0D0D0D',
});

const Header = styled.View({
  flexDirection: 'row',
  paddingHorizontal: 10,
  justifyContent: 'flex-start',
});

const Button = styled.TouchableOpacity({
  width: 18,
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonLabel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#FFFFFF',
});

const Heading = styled.View({
  flex: 1,
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
});

const HeadingLabel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 17,
  color: '#FFFFFF',
});

const Contents = styled.View({
  margin: 20,
});

const List = styled.View({
  marginBottom: 10,
});

const Term = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const Description = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 12,
  color: '#FFFFFF',
});

const Copyright = styled.Text({
  paddingTop: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 10,
  color: '#FFFFFF',
});

function ApiVworld({ navigation, route }) {
  return (
    <Container>
      <Header>
        <Button onPress={() => { navigation.navigate('apis') }}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>브이월드 공간정보 오픈플랫폼</HeadingLabel>
        </Heading>
      </Header>
      <Contents>
        <List>
          <Term>Service URI</Term>
          <Description>https://www.vworld.kr</Description>
        </List>
        <List>
          <Term>Service API</Term>
          <Description>https://api.vworld.kr/req/address</Description>
        </List>
        <Copyright>Copyright © 2012~2019. Open Platform All Rights Reserved.</Copyright>
      </Contents>
    </Container>
  )
}

export default ApiVworld;
