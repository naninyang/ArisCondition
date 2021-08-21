## About "Aris Condition"
"아리스 컨디션" 앱은 공기 질, 코로나19 확진자 수, 날씨 상태 및 날씨 컨디션 메시지를 간단하게 보여주는 앱입니다.
## CAUTION
이 앱은 Expo CLI가 아닌 RN CLI로 제작된 앱입니다.
따라서 Expo CLI에서 지원하는 package는 사용할 수 없습니다.
iOS 세로 버전에서만 테스트 되었습니다. 가로 버전은 지원하지 않습니다. (가로 버전은 summary 화면 특성상 지원할 예정이 없습니다.)
AOS 환경에서의 개발은 AOS 에뮬레이터에서 테스트 되었으므로 실제 Android 디바이스에서는 비정상적으로 동작할 수 있습니다.
## App. Installation
repo clone을 하신 후, 터미털에서 `npm ci` 또는 `npm i` 명령어를 사용하여 npm package를 설치하세요. 그리고 `npx pod-install` 명령어를 사용해 iOS의 CocoaPod을 설치하세요.
`npx react-native start` 명령어를 사용하면 Metro가 실행됩니다. Metro 실행 후, iOS 시뮬레이터 또는 AOS 에뮬레이터를 실행하세요. iOS 실행은 `npx react-native run-ios`, AOS 실행은 `npx react-native run-android` 입니다.
참고로, Metro는 계속 실행 중인 상태로 두어야 하기 때문에 iOS/AOS 실행은 새로운 터미널을 띄우고 명령어를 넣어야 합니다.