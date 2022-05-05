import styled from 'styled-components';

export const BoxHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 194px));
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: ${({ content }) => content};
`;

export const Search = styled.input.attrs({
  type: 'search',
})`
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: ${({ theme }) => theme.dark.radius.base};
  background-color: ${({ theme }) => theme.dark.colors.gray200};

  &:focus {
    color: ${({ theme }) => theme.dark.colors.gray100}
  }
`;
