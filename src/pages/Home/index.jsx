import * as React from 'react';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Form from '../../components/Form/Form';
import TodoList from '../../components/TodoList';
import { Main } from '../../styles/GlobalStyled';

function Home() {
  return (
    <Main>
      <Header />
      <SubHeader />
      <Form />
      <TodoList />
    </Main>
  );
}

export default Home;
