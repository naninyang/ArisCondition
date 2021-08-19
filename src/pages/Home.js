import * as React from 'react';
import { StatusBar, } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from '@emotion/native';
import Location from "../components/Location";

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

const Header = styled.View({
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingRight: 10,
  paddingBottom: 60,
  paddingLeft: 20,
})

const Button = styled.TouchableOpacity({
  padding: 10,
});

const Label = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
})

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
            <Header>
              <Location />
              <Button
                onPress={goInfo}
              >
                <Label>정보  &#xE001;</Label>
              </Button>
            </Header>
            {/*  */}
          </Contents>
        </Backgrounds>
      </Container>
    </>
  )
}

export default Home;
