import React, { useState, } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled, { css } from '@emotion/native';

const StatusWrapper = styled.View({
  flexDirection: 'row',
});

const CurrentStatus = styled.Text({
  paddingTop: 10,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const Location = () => {
  const currentMonthDay = format(new Date().getTime(), "M.d");
  const currentWeek = format(new Date().getTime(), "(EEEEEE)", { locale: ko });
  const currentTime = format(new Date().getTime(), "h:mm a");
  const [address, setAddress] = useState([]);

  const API_URL = 'https://api.vworld.kr/req/address';
  const API_KEY = '18C657E2-D781-3799-8626-496EDE6DCF70';

  axios.get(API_URL, {
    params: {
      key: API_KEY,
      service: 'address',
      request: 'GetAddress',
      // TO-DO: GeoLocation 사용해서 point 불러오기
      point: '126.95906,37.5576695',
      type: 'parcel',
    }
  })
    .then(response => {
      setAddress(response.data.response.result);
    })
    .catch(console.warn)

  return (
    <StatusWrapper>
      {address.map(item => {
        return (
          <CurrentStatus key={item.structure.level5}>
            {item.structure.level1}
            {/* TODO: GeoLocation 사용 가능해질 때 level4L 불러오기 */}
            {/* {' '}
            {item.structure.level4L} */}
          </CurrentStatus>
        )
      })}
      <CurrentStatus>
        {' '}
        {currentMonthDay}
        {' '}
        {currentWeek}
        {' '}
        {currentTime}
      </CurrentStatus>
    </StatusWrapper>
  )
};

export default Location;
