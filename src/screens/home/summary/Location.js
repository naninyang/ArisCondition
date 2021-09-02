import React, { useState, } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled, { css } from '@emotion/native';

import useAddress from '../../../utils/useAddress';

const StatusWrapper = styled.View({
  flexDirection: 'row',
});

const CurrentStatus = styled.Text({
  paddingTop: 20,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: 14,
  color: '#FFFFFF',
});

const Location = () => {
  const currentMonthDay = format(new Date().getTime(), "M.d");
  const currentWeek = format(new Date().getTime(), "(EEEEEE)", { locale: ko });
  const currentTime = format(new Date().getTime(), "h:mm a");

  const address = useAddress();

  console.log('ADDRESS______  ', { address });

  return (
    <StatusWrapper>
      <CurrentStatus>
        {address.structure.level1}
        {' '}
        {address.structure.level4L}
      </CurrentStatus>
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
