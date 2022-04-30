import * as React from 'react';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import ManageContent from '../../components/ManageContent/ManageContent';
import EmptyFigure from '../../components/EmptyFigure/EmptyFigure';
import TodoList from '../../components/TodoList/TodoList';
import { Main } from '../../styles/GlobalStyled';
import { HandleFormContentContext } from '../../context/FormContent';
import { TaskContext } from '../../context/TodoList';

function Home() {
  const { state } = React.useContext(HandleFormContentContext);
  const { tasks } = React.useContext(TaskContext);

  return (
    <Main>
      <Header />
      <SubHeader />
      <TodoList />
      <ManageContent />
      {!state && !tasks.length ? <EmptyFigure /> : null}
    </Main>
  );
}

export default Home;
