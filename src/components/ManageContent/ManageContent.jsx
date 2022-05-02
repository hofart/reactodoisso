import * as React from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { BtnWithIcon, Typography } from '../../styles/GlobalStyles';
import { Box, FormBox } from './Styles';
import Form from '../Form/Form';
import { HandleFormContentContext } from '../../context/FormContent';

function ManageContent() {
  const { state, setState } = React.useContext(HandleFormContentContext);

  const handleFormContent = (e) => {
    e.preventDefault();
    setState(true);
  };

  return (
    <div>
      {state ? (
        <FormBox>
          <Form />
        </FormBox>
      ) : (
        <Box>
          <BtnWithIcon onClick={handleFormContent}>
            <HiPlusSm />
            <Typography>Add new task</Typography>
          </BtnWithIcon>

          <BtnWithIcon>
            <HiPlusSm />
            <Typography>Add new category</Typography>
          </BtnWithIcon>
        </Box>
      )}
    </div>
  );
}

export default ManageContent;
