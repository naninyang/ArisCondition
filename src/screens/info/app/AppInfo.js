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

const AppNameKorean = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 20,
  color: '#FFFFFF',
});

const AppNameEnglish = styled.Text({
  marginTop: 5,
  marginBottom: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 14,
  color: '#FFFFFF',
});

const Copyright = styled.View({
  flexDirection: 'row',
  marginVertical: 2,
});

const TextBold = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 10,
  color: '#FFFFFF',
});

const TextRegular = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 10,
  color: '#FFFFFF',
});

function AppInfo({ navigation, route }) {
  return (
    <Container>
      <Header>
        <Button onPress={() => { navigation.navigate('info') }}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>앱 정보</HeadingLabel>
        </Heading>
      </Header>
      <Contents>
        <AppNameKorean>아리스 컨디션 v1.0.0</AppNameKorean>
        <AppNameEnglish>ARIS condition v1.0.0</AppNameEnglish>
        <Copyright>
          <TextRegular>Copyright 2021</TextRegular>
          <TextBold>
            {' '}
            ARIS develop,
            {' '}
          </TextBold>
          <TextRegular>All Rights Resevered.</TextRegular>
        </Copyright>
        <Copyright>
          <TextBold>Thanks to code contributors!</TextBold>
        </Copyright>
      </Contents>
    </Container>
  )
}

export default AppInfo;
