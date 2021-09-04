import * as React from 'react';
import { Appearance } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX } from 'react-native-iphone-x-helper';
import _ from 'lodash';
import styled, { css } from '@emotion/native';

import InfoListView from '../../../components/InfoListView';
import ListItem from './ListItem';

const colorScheme = Appearance.getColorScheme();

const status = getStatusBarHeight(true);
if (isIphoneX()) statusBarHeight = status;
else statusBarHeight = 0;

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

  const goNavigation = () => {
    navigation.navigate('info');
  };

  return (
    <InfoListView
      currentTitle={'오픈소스 라이선스'}
      onPress={goNavigation}
    >
      <InfoList
        data={_.sortBy(ListItem, 'title')}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </InfoListView>
  )
}

export default Licenses;
