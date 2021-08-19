import React from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled, { css } from '@emotion/native';

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

  return (
    <CurrentStatus>
      서울 조원동,
      {' '}
      {currentMonthDay}
      {' '}
      {currentWeek}
      {' '}
      {currentTime}
    </CurrentStatus>
  )
};

export default Location;
