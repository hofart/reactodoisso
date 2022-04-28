import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 194px));
  justify-content: space-between;
  grid-gap: 1rem;
  padding: 1rem 0;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
`;
