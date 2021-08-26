import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
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

const Description = styled.Text({
  paddingBottom: 20,
  lineHeight: 20,
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: 14,
  color: '#FFFFFF',
});

const RawData = {
  tableHead: ['', '미세먼지', '초미세먼지'],
  tableTitle: ['최고', '좋음', '양호', '보통', '나쁨', '상당히 나쁨', '매우 나쁨', '최악'],
  tableColor: ['#FFEA00', '#00E676', '#1DE9B6', '#00B0FF', '#651FFF', '#AA00FF', '#C51162', '#FF1744'],
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
  return (
    <Container>
      <Header>
        <Button onPress={() => { navigation.navigate('datas') }}>
          <ButtonLabel>&#xE000;</ButtonLabel>
        </Button>
        <Heading>
          <HeadingLabel>공기질 데이터</HeadingLabel>
        </Heading>
      </Header>
      <Contents>
        <Description>아리스컨디션은 세계보건기구 WHO 기준에 따라 8단계로 안내합니다.</Description>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={RawData.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={RawData.tableTitle}
              style={[styles.title, { backgroundColor: `${RawData.tableColor}` }]}
              textStyle={styles.text}
            />
            <Rows
              data={RawData.tableData}
              flexArr={[1, 0, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </Contents>
    </Container>
  )
}

const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: '#212121',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
  },
  row: {
    height: 28,
  },
  text: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default DataAqp;
