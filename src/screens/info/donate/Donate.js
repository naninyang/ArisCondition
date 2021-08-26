import * as React from 'react';
import { Linking, } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import WrappedText from 'react-native-wrapped-text';
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

const Term = styled.Text({
  paddingBottom: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 16,
  lineHeight: 22,
  color: '#FFFFFF',
});

const DonateSection = styled.View({
  flexDirection: 'row',
  marginTop: 20,
});

const DonateText = styled.Text({
  paddingRight: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const DonateButton = styled.TouchableOpacity({
  borderBottomWidth: 1,
  borderBottomColor: '#FFFFFF',
});

const DonateButtonLabel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const DonateNotice = styled.View({
  marginTop: 20,
});

const DonateNoticeDescription = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 12,
  color: '#FFFFFF',
});

const openLink = async () => {
  try {
    const url = 'https://toss.me/iamari'
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: '닫기',
        preferredBarTintColor: '#2166f6',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#2166f6',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right'
        },
      })
      Alert.alert(JSON.stringify(result))
    }
    else Linking.openURL(url)
  } catch (error) {
    Alert.alert(error.message)
  }
}

function Danate({ navigation, route }) {
  return (
    <Container>
      <Header>
        <Button onPress={() => { navigation.navigate('info') }}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>후원하기</HeadingLabel>
        </Heading>
      </Header>
      <Contents>
        <Term>아리스컨디션 앱은 수익 창출이나 광고를 받지 않는 무료 앱 입니다.</Term>
        <WrappedText
          textStyle={{
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: 14,
            lineHeight: 20,
            color: '#FFFFFF',
          }}
          containerStyle={{
            marginVertical: 5,
          }}
        >
          - 수익 창출을 하지 않기 때문에 앱 내 구입 콘텐츠는 없습니다.
        </WrappedText>
        <WrappedText
          textStyle={{
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: 14,
            lineHeight: 20,
            color: '#FFFFFF',
          }}
          containerStyle={{
            marginVertical: 5,
          }}
        >
          - 유지보수 비용 등 서비스 운영에 도움을 주실 수 있습니다.
        </WrappedText>
        <WrappedText
          textStyle={{
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: 14,
            lineHeight: 20,
            color: '#FFFFFF',
          }}
          containerStyle={{
            marginVertical: 5,
          }}
        >
          - 후원해 주신 분은 Supporter에 올려드립니다. Supporter에 올라가길 원하는 분은 입금 후 이메일을 보내주세요. 입금자명, 올라가길 원하는 이름을 알려주세요. 올라가길 원하는 이름만이 Supporter에 올라갑니다. 이메일 주소는 1158iamari@gmail.com 입니다.
        </WrappedText>
        <DonateSection>
          <DonateText>후원링크: </DonateText>
          <DonateButton onPress={openLink}>
            <DonateButtonLabel>https://toss.me/iamari</DonateButtonLabel>
          </DonateButton>
        </DonateSection>
        <DonateNotice>
          <DonateNoticeDescription>* 후원은 '토스'를 통하여 진행되며, '토스' 가입자가 아닌 사용자도 후원이 가능합니다.</DonateNoticeDescription>
        </DonateNotice>
      </Contents>
    </Container>
  )
}

export default Danate;
