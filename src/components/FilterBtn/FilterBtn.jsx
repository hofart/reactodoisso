import React from 'react';
import { Ul, Button } from './Styled';

function FilterBtn({ filter }) {
  return (
    <Ul>
      {filter.map((item) => (
        <li key={item.param}>
          <Button>{item.name}</Button>
        </li>
      ))}
    </Ul>
  );
}

export default FilterBtn;
