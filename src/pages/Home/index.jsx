import React from 'react';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import ManageContent from '../../components/ManageContent/ManageContent';
import { Main } from '../../styles/GlobalStyled';
import HandleFormProvider from '../../context/FormContent';

function Home() {
  return (
    <HandleFormProvider>
      <Main>
        <Header />
        <SubHeader />
        <ManageContent />
      </Main>
    </HandleFormProvider>
  );
}

export default Home;
