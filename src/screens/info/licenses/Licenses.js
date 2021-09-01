import * as React from 'react';
import { Appearance, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX } from 'react-native-iphone-x-helper';
import uuid from 'react-native-uuid';
import _ from 'lodash';
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

const InfoList = styled.FlatList();

const LinkItem = styled.View({
  backgroundColor: colorScheme === 'light' || null ? '#FFFFFF' : '#1C1C1E',
  paddingHorizontal: 15,
});

const LinkItemWrapper = styled.View({
  borderBottomWidth: 1,
  borderBottomColor: colorScheme === 'light' || null ? '#c6c6c8' : '#707070',
});

const Link = styled.TouchableOpacity({
  flexDirection: 'row',
  height: 45,
  alignItems: 'center',
});

const LinkLabel = styled.Text({
  flex: 1,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 17,
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

const LabelBullet = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 17,
  color: colorScheme === 'light' || null ? '#c7c7cc' : '#5b5b5f',
});

// TO-DO: Package Open Licenses List
// TO-DO: Fonts Licenses List
const InfoItem = [
  {
    id: uuid.v4(),
    title: 'React',
    link: 'licenseReact',
  },
  {
    id: uuid.v4(),
    title: 'React Native',
    link: 'licenseReactNative',
  },
  {
    id: uuid.v4(),
    title: 'React Native Gesture Handler',
    link: 'licenseReactNativeGestureHandler',
  },
  {
    id: uuid.v4(),
    title: 'react-native-linear-gradient',
    link: 'licenseReactNativeLinearGradient',
  },
  {
    id: uuid.v4(),
    title: 'react-native-safe-area-context',
    link: 'licenseReactNativeSafeAreaContext',
  },
  {
    id: uuid.v4(),
    title: 'React Native Screens',
    link: 'licenseReactNativeScreens',
  },
];

function Licenses({ navigation, route }) {
  const Item = ({ title, link }) => (
    <LinkItem>
      <LinkItemWrapper>
        <Link onPress={() => { navigation.navigate(link) }}>
          <LinkLabel>{title}</LinkLabel>
          <LabelBullet>&#xE001;</LabelBullet>
        </Link>
      </LinkItemWrapper>
    </LinkItem>
  );
  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
        link={item.link}
      />
    )
  };

  return (
    <>
      <StatusBar
        hidden={false}
        animated={true}
        StatusBarAnimation={'slide'}
        barStyle={'dark-content'}
      />
      <Container>
        <Header>
          <Button onPress={() => { navigation.navigate('info') }}>
            <ButtonLabel>&#xE000;</ButtonLabel>
          </Button>
          <Heading>
            <HeadingLabel>오픈소스 라이선스</HeadingLabel>
          </Heading>
        </Header>
        <InfoList
          data={_.sortBy(InfoItem, 'title')}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Container>
    </>
  )
}

export default Licenses;
