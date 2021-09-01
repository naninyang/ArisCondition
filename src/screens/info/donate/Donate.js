import * as React from 'react';
import { Linking, Appearance } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isIphoneX } from 'react-native-iphone-x-helper';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import WrappedText from 'react-native-wrapped-text';
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

const Contents = styled.View({
  margin: 20,
});

const Term = styled.Text({
  paddingBottom: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 16,
  lineHeight: 22,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const DonateSection = styled.View({
  flexDirection: 'row',
  marginTop: 20,
});

const DonateText = styled.Text({
  paddingRight: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const DonateButton = styled.TouchableOpacity({
  borderBottomWidth: 1,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const DonateButtonLabel = styled.Text({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const DonateNotice = styled.View({
  marginTop: 20,
});

const openLink = async () => {
  try {
    const url = 'https://toss.me/iamari'
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'close',
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
        <Term>'아리스 컨디션' 앱은 수익 창출이나 광고를 받지 않는 무료 앱 입니다.</Term>
        <WrappedText
          textStyle={{
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: 14,
            lineHeight: 20,
            color: colorScheme === 'light' || null ? '#000000' : '#ebebf5',
          }}
          containerStyle={{
            opacity: .6,
            alignItems: 'flex-start',
            marginVertical: 5,
          }}
        >
          - 수익 창출을 하지 않기 때문에 앱 내 구입 콘텐츠가 없습니다.
        </WrappedText>
        <WrappedText
          textStyle={{
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: 14,
            lineHeight: 20,
            color: colorScheme === 'light' || null ? '#000000' : '#ebebf5',
          }}
          containerStyle={{
            opacity: .6,
            alignItems: 'flex-start',
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
            color: colorScheme === 'light' || null ? '#000000' : '#ebebf5',
          }}
          containerStyle={{
            opacity: .6,
            alignItems: 'flex-start',
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
          <WrappedText
            textStyle={{
              fontFamily: 'SpoqaHanSansNeo-Bold',
              fontSize: 12,
              lineHeight: 18,
              color: colorScheme === 'light' || null ? '#ff2d55' : '#ff375f',
            }}
            containerStyle={{
              alignItems: 'flex-start',
              marginTop: 5,
            }}
          >
            * 후원은 '㈜비바리퍼블리카 (사업자등록번호 120-88-01280)'의 '토스'를 통하여 진행되며, '토스' 가입자가 아닌 사용자도 후원이 가능합니다.
          </WrappedText>
          <WrappedText
            textStyle={{
              fontFamily: 'SpoqaHanSansNeo-Bold',
              fontSize: 12,
              lineHeight: 18,
              color: colorScheme === 'light' || null ? '#ff2d55' : '#ff375f',
            }}
            containerStyle={{
              alignItems: 'flex-start',
              marginVertical: 2,
            }}
          >
            * 후원은 '토스'를 통하여 진행되기 때문에 '아리스 컨디션' 앱에 개인정보가 저장되지 않습니다.
          </WrappedText>
          <WrappedText
            textStyle={{
              fontFamily: 'SpoqaHanSansNeo-Bold',
              fontSize: 12,
              lineHeight: 18,
              color: colorScheme === 'light' || null ? '#ff2d55' : '#ff375f',
            }}
            containerStyle={{
              alignItems: 'flex-start',
            }}
          >
            * '토스'는 후원을 받기 위한 수단일 뿐, '아리스 컨디션' 앱 개발사 '아리스 디벨롭'과는 아무런 관련이 없는 서비스입니다. '토스'와 관련된 문의는 '㈜비바리퍼블리카'의 고객센터(서울특별시 강남구 테헤란로 133, 8층)로 문의하세요.
          </WrappedText>
        </DonateNotice>
      </Contents>
    </Container>
  )
}

export default Danate;
