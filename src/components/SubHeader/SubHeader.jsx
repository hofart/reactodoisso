import * as React from 'react';
import { Span } from '../../styles/GlobalStyles';
import { BoxSubHeader } from './Styles';
import { TaskContext } from '../../context/TodoList';
import { FilterTypes } from '../../data/FilterTypes';
import FilterBtn from '../FilterBtn/FilterBtn';

function SubHeader() {
  const { tasks } = React.useContext(TaskContext);

  return (
    <BoxSubHeader>
      <Span size="1rem">{`${tasks.length} tasks`}</Span>
      {tasks.length ? <FilterBtn filter={FilterTypes} /> : ''}
    </BoxSubHeader>
  );
}

export default SubHeader;
