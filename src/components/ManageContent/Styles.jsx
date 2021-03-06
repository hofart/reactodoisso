import styled from 'styled-components';
import { HiPlusSm } from 'react-icons/hi';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormBox = styled.div`
  display: ${({ display }) => display};
  padding: .5rem;
  border: 1px solid ${({ theme }) => theme.dark.colors.gray100};
  border-radius: ${({ theme }) => theme.dark.radius.base};
  background-color: ${({ theme }) => theme.dark.colors.black300};
`;

export const Icon = styled(HiPlusSm)`
  color: ${({ theme }) => theme.dark.colors.red}
`;
