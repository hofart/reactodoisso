import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 194px));
  justify-content: space-between;
  grid-gap: 1rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.Content};
`;

export const Search = styled.input.attrs({ type: 'search' })`
  width: 100%;
  height: 30px;
  padding: 5px;

  border-radius: ${(props) => props.theme.dark.radius.base};
  background-color: ${(props) => props.theme.dark.colors.gray200};
`;
