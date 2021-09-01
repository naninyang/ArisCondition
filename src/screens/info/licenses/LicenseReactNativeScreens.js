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

let code = `
The MIT License (MIT)

Copyright (c) 2018 Krzysztof Magiera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

function LicenseReactNativeScreens({ navigation, route }) {
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
          <Button onPress={() => { navigation.navigate('licenses') }}>
            <ButtonLabel>&#xE000;</ButtonLabel>
          </Button>
          <Heading>
            <HeadingLabel>React Native Screens</HeadingLabel>
          </Heading>
        </Header>
        <Contents>
          <Code>{code}</Code>
        </Contents>
      </Container>
    </>
  )
}

export default LicenseReactNativeScreens;
