import * as React from 'react';
import { Span } from '../../styles/GlobalStyled';
import { Container } from './Styled';
import { TaskContext } from '../../context/TodoList';
import { FilterTypes } from '../../data/FilterTypes';
import FilterBtn from '../FilterBtn/FilterBtn';

function SubHeader() {
  const { tasks } = React.useContext(TaskContext);

  return (
    <Container>
      <Span Size="1rem">{`${tasks.length} tasks`}</Span>
      {tasks.length ? <FilterBtn filter={FilterTypes} /> : ''}
    </Container>
  );
}

export default SubHeader;
