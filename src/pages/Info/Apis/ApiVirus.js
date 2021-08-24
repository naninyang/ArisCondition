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

const Reference = styled.View({
  marginTop: 20,
});

const ReferenceTitle = styled.Text({
  paddingBottom: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 18,
  color: '#FFFFFF',
});

const ReferenceItemMain = styled.Text({
  paddingBottom: 5,
  fontFamily: 'SpoqaHanSansNeo-bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const ReferenceItemSub = styled.Text({
  paddingBottom: 2,
  fontFamily: 'SpoqaHanSansNeo-regular',
  fontSize: 14,
  color: '#FFFFFF',
});

function ApiAqp({ navigation, route }) {
  return (
    <Container>
      <Header>
        <Button onPress={() => { navigation.navigate('apis') }}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>굿바이★로나</HeadingLabel>
        </Heading>
      </Header>
      <Contents>
        <List>
          <Term>Service URI</Term>
          <Description>https://api.corona-19.kr</Description>
        </List>
        <List>
          <Term>Service API</Term>
          <Description>https://api.corona-19.kr/korea/country/new</Description>
        </List>
        <Copyright>© 2020-2021 굿바이★로나(Goodbye-★★rona).</Copyright>
        <Copyright>* API 공식 명칭은 불가피하게 일부를 마스킹하였습니다.</Copyright>
        <Reference>
          <ReferenceTitle>API References</ReferenceTitle>
          <ReferenceItemMain>- 대한민국 보건복지부</ReferenceItemMain>
          <ReferenceItemSub>   - http://www.mohw.go.kr</ReferenceItemSub>
          <ReferenceItemSub>   - http://ncov.mohw.go.kr</ReferenceItemSub>
        </Reference>
      </Contents>
    </Container>
  )
}

export default ApiAqp;
