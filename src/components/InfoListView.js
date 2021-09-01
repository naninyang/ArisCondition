import * as React from 'react';
import { Appearance, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX } from 'react-native-iphone-x-helper';
import styled, { css } from '@emotion/native';

const colorScheme = Appearance.getColorScheme();

const status = getStatusBarHeight(true);
if (isIphoneX()) statusBarHeight = status;
else statusBarHeight = 0;

const Container = styled.View({
  flex: 1,
  backgroundColor: colorScheme === 'light' || null ? '#f2f2f7' : '#000000',
});

const Header = styled.View({
  flexDirection: 'row',
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderBottomColor: colorScheme === 'light' || null ? '#c6c6c8' : '#707070',
  paddingTop: statusBarHeight,
  justifyContent: 'flex-start',
  backgroundColor: colorScheme === 'light' || null ? '#ffffff' : '#0D0D0D',
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
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
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
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

function InfoListView({ children, onPress, currentTitle }) {
  return (
    <>
      <StatusBar
        hidden={false}
        animated={true}
        StatusBarAnimation={'slide'}
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
        {children}
      </Container>
    </>
  )
}

export default InfoListView;
