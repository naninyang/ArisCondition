## About "Aris Condition"
"아리스 컨디션" 앱은 공기 질, 코로나19 확진자 수, 날씨 상태 및 날씨 컨디션 메시지를 간단하게 보여주는 앱입니다.

## CAUTION
이 앱은 Expo CLI가 아닌 RN CLI로 제작된 앱입니다.  
따라서 Expo CLI에서 지원하는 package는 사용할 수 없습니다.

iOS 세로 버전에서만 테스트 되었습니다. 가로 버전은 지원하지 않습니다. (가로 버전은 summary 화면 특성상 지원할 예정이 없습니다.)  
AOS 환경에서의 개발은 AOS 에뮬레이터에서 테스트 되었으므로 실제 Android 디바이스에서는 비정상적으로 동작할 수 있습니다.  

## App. Installation
```Bash
$ git clone git@github.com:naninyang/ArisCondition.git

$ cd ArisCondition

# npm packages install
$ npm ci

# CocoaPots intall
$ npx pod-intall
```

### Metro Start
```bash
$ npx react-native start
```

### Run Device
```bash
# iOS
$ npx react-native run-ios

# AOS
$ npx react-native run-android
```

참고로, Metro는 계속 실행 중인 상태로 두어야 하기 때문에 iOS/AOS 실행은 새로운 터미널을 띄우고 명령어를 넣어야 합니다.

## APIs
### Vworld Geocoder API 2.0
* **서비스 URL:**  
https://www.vworld.kr
* **가입 후 Key 신청**
* **API 문서:**  
https://www.vworld.kr/dev/v4dv_geocoderguide2_s002.do
* **사용중인 API:**  
https://api.vworld.kr/req/address

### Air Quality Programmatic APIs
* **서비스 URL:**  
https://aqicn.org/api
* **API Key 신청 URL:**  
https://aqicn.org/data-platform/token/#/
* **API 문서:**  
https://aqicn.org/json-api/doc
* **사용중인 API:**  
https://api.waqi.info/feed/geo

### Goodbye-corona API
* **서비스 URL:**  
https://api.corona-19.kr
* **Key 신청 후 신청한 이메일 확인**
* **API 문서:**  
https://github.com/dhlife09/Corona-19-API
* **사용중인 API:**  
https://api.corona-19.kr/korea/country/new/  
https://naninyang.github.io/api/VirusDistancing.json

### Open Weather Map API
* **서비스 URL:**  
https://openweathermap.org
* **가입 후 Key 신청**
* **API 문서:**  
https://openweathermap.org/api
* **서비스 URL:**  
https://api.openweathermap.org/data/2.5

API Key는 개발자 개인이 신청하여 발급받은 Key를 로컬의 프로젝트 루트 디렉토리에 .env 파일을 생성하여 관리해야 합니다.

## dotenv (.env)
```text
API_URL_WEATHER=https://api.openweathermap.org/data/2.5
API_KEY_WEATHER=신청한 키 입력
API_LOCALE_WEATHER=kr

API_URL_VIRUS=https://api.corona-19.kr/korea/country/new/
API_KEY_VIRUS=신청한 키 입력
API_URL_DISTANCING=https://naninyang.github.io/api/VirusDistancing.json

API_URL_AIR=https://api.waqi.info/feed/geo
API_KEY_AIR=신청한 키 입력

API_URL_ADDRESS=https://api.vworld.kr/req/address
API_KEY_ADDRESS=신청한 키 입력
```
