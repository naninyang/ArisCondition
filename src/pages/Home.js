import * as React from 'react';
import { StatusBar, } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from '@emotion/native';

const StatusGradient = styled.SafeAreaView({
  flex: 0,
  backgroundColor: '#FF4E50',
});

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: '#F9D423',
});

const Backgrounds = styled(LinearGradient)({
  width: '100%',
  flex: 1,
});

const Contents = styled.ScrollView({
  width: '100%',
});

const Text = styled.Text({
  paddingTop: 10,
  paddingBottom: 70,
  paddingLeft: 20,
  color: '#FFFFFF',
  fontSize: 14,
});

const Button = styled.Button({
  fontSize: 14,
});

const Home = ({ navigation, route }) => {
  const goInfo = () => {
    navigation.navigate('info');
  };
  return (
    <>
      <StatusBar hidden={true} />
      <StatusGradient></StatusGradient>
      <Container>
        <Backgrounds colors={['#FF4E50', '#F9D423']}>
          <Contents contentContainerStyle="flex:1">
            <Text>위치, 날짜 들어가는 공간</Text>
            <Button
              onPress={goInfo}
              title="정보"
            >
            </Button>
          </Contents>
        </Backgrounds>
      </Container>
    </>
  )
}

export default Home;
