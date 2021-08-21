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
})

const HeadingLabel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 17,
  color: '#FFFFFF',
})

const InfoList = styled.View({
  paddingVertical: 10,
});

const ListItem = styled.Text({
  height: 45,
  paddingHorizontal: 15,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 17,
  color: '#FFFFFF',
});

function Info({ navigation, route }) {
  const goBack = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      {/* TODO: 헤더(뒤로가기 버튼, 정보 타이틀), 목록 작업하기 */}
      <Header>
        <Button onPress={goBack}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>정보</HeadingLabel>
        </Heading>
      </Header>
      <InfoList>
        <ListItem>No content yet.</ListItem>
      </InfoList>
    </Container>
  )
}

export default Info;
