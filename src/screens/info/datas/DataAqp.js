import * as React from 'react';
import { Appearance, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import styled, { css } from '@emotion/native';

import InfoItemView from '../../../components/InfoItemView';

const colorScheme = Appearance.getColorScheme();

const AirInfo = styled.Text({
  lineHeight: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

const Description = styled.Text({
  paddingVertical: 20,
  lineHeight: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
});

const Reference = styled.View({
  marginTop: 20,
});

const ReferenceItemMain = styled.Text({
  paddingBottom: 5,
  fontFamily: 'SpoqaHanSansNeo-bold',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const ReferenceItemSub = styled.Text({
  paddingBottom: 10,
  fontFamily: 'SpoqaHanSansNeo-regular',
  fontSize: 14,
  color: colorScheme === 'light' || null ? '#000000' : '#FFFFFF',
});

const DataTable = {
  tableHead: ['', '미세먼지', '초미세먼지'],
  tableTitle: ['최고', '좋음', '양호', '보통', '나쁨', '상당히 나쁨', '매우 나쁨', '최악'],
  tableData: [
    ['0~15', '0~8'],
    ['16~30', '9~15'],
    ['31~40', '16~20'],
    ['41~50', '21~25'],
    ['51~75', '26~37'],
    ['76~100', '38~50'],
    ['101~150', '51~75'],
    ['151~', '76~'],
  ],
};

function DataAqp({ navigation, route }) {
  const goNavigation = () => {
    navigation.navigate('datas');
  };

  return (
    <InfoItemView
      currentTitle={'공기질 데이터'}
      onPress={goNavigation}
    >
      <AirInfo>미세먼지(Coarse particulate matter) PM10</AirInfo>
      <AirInfo>초미세먼지(Fine particulate matter) PM2.5</AirInfo>
      <AirInfo>단위 ㎍/㎥</AirInfo>
      <AirInfo>데이터 갱신 매 시간 0분</AirInfo>
      <Description>아리스컨디션은 세계보건기구 WHO 기준에 따라 8단계로 안내합니다.</Description>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={DataTable.tableHead}
          style={styles.head}
          textStyle={styles.term}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={DataTable.tableTitle}
            style={styles.title}
            textStyle={styles.term}
          />
          <Rows
            data={DataTable.tableData}
            flexArr={[1, 0, 1]}
            style={styles.row}
            textStyle={styles.description}
          />
        </TableWrapper>
      </Table>
      <Reference>
        <ReferenceItemMain>대기오염실시간공개시스템:</ReferenceItemMain>
        <ReferenceItemSub>https://www.airkorea.or.kr</ReferenceItemSub>
        <ReferenceItemMain>서울특별시 기후대기환경정보:</ReferenceItemMain>
        <ReferenceItemSub>https://cleanair.seoul.go.kr</ReferenceItemSub>
        <ReferenceItemMain>WHO Air Pollution:</ReferenceItemMain>
        <ReferenceItemSub>https://www.who.int/westernpacific/health-topics/air-pollution</ReferenceItemSub>
      </Reference>
    </InfoItemView>
  )
}

const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: colorScheme === 'light' || null ? '#ff2d55' : '#ff375f',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor: colorScheme === 'light' || null ? '#2c2c2e' : '#636366',
  },
  row: {
    height: 40,
    backgroundColor: colorScheme === 'light' || null ? '#FFFFFF' : '#000000',
  },
  term: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    textAlign: 'center',
    color: colorScheme === 'light' || null ? '#0D0D0D' : '#FFFFFF',
  },
});

export default DataAqp;
