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
        <Title>{`Today ${currentDate.getDate()}`}</Title>
        <Span
          size="12px"
          weight="600"
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
