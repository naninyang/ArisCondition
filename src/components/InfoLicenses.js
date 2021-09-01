import * as React from 'react';
import { StatusBar } from 'react-native';
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

const Contents = styled.ScrollView({
  margin: 20,
});

const Code = styled.Text({
  fontFamily: 'FiraCode-Regular',
  fontSize: 12,
  color: '#FFFFFF',
});

function InfoLicenses({ children, onPress, currentTitle }) {
  return (
    <>
      <StatusBar
        hidden={false}
        animated={true}
        StatusBarAnimation={'slide'}
        barStyle={'light-content'}
      />
      <Container>
        <Header>
          <Button onPress={onPress}>
            <ButtonLabel>&#xE000;</ButtonLabel>
          </Button>
          <Heading>
            <HeadingLabel>{currentTitle}</HeadingLabel>
          </Heading>
        </Header>
        <Contents>
          <Code>
            {children}
          </Code>
        </Contents>
      </Container>
    </>
  )
}

export default InfoLicenses;
