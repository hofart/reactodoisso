import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.dark.colors.gray200};
  padding: .2rem .5rem;

  font-size: .9rem;
  color: white;

  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;
