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

const InfoList = styled.FlatList({
  marginVertical: 10,
  borderTopWidth: 1,
  borderTopColor: '#707070',
});

const LinkItem = styled.View({
  backgroundColor: '#1C1C1E',
  paddingHorizontal: 15,
});

const LinkItemWrapper = styled.View({
  borderBottomWidth: 1,
  borderBottomColor: '#707070',
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
  color: '#FFFFFF',
});

const LabelBullet = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 17,
  opacity: .3,
  color: '#EBEBF5',
});

const InfoItem = [
  {
    id: '1',
    title: '후원하기',
    link: 'donate',
  },
  {
    id: '2',
    title: '오픈소스 라이선스',
    link: 'licenses',
  },
  {
    id: '3',
    title: 'APIs',
    link: 'apis',
  },
  {
    id: '4',
    title: '데이터 정보',
    link: 'datas',
  },
  {
    id: '5',
    title: '앱 정보',
    link: 'appinfo',
  },
];

function Info({ navigation, route }) {
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
    <Container>
      <Header>
        <Button onPress={() => { navigation.navigate('home') }}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>정보</HeadingLabel>
        </Heading>
      </Header>
      <InfoList
        data={InfoItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

export default Info;