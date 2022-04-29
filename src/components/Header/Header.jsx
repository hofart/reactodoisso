import * as React from 'react';
import { Title, Span } from '../../styles/GlobalStyled';
import { Box, BoxHeader, Search } from './Styled';
import { Months, Days } from '../../data/Dates';

function Header() {
  const currentDate = new Date();
  const currentDateAndMonth = `${Days[currentDate.getDay()]} - ${Months[currentDate.getMonth()]}`;

  return (
    <BoxHeader>
      <Box>
        <Title Size="20px">{`Today ${currentDate.getDate()}`}</Title>
        <Span
          Size="12px"
          Weight="900"
          marginLeft=".5rem"
        >
          {currentDateAndMonth}
        </Span>
      </Box>
      <Box>
        <Search placeholder="Type here..." />
      </Box>
    </BoxHeader>
  );
}

export default Header;
