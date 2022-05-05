import styled from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';

export const Icon = styled(FaRegTrashAlt)`
  color: ${({ theme }) => theme.dark.colors.red};
`;

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  accent-color: ${({ theme }) => theme.dark.colors.red};
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  padding: .5rem 0;
  margin: 1rem 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.dark.colors.gray200}`} ;
`;

export const Box = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? 'center' : null)};
  justify-content: ${({ content }) => (content ? 'center' : null)};
  gap: ${({ gap }) => gap || '10px'};
`;
