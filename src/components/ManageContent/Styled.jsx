import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormBox = styled.div`
  display: ${(props) => props.Display};
  padding: .5rem;
  border: 1px solid ${(props) => props.theme.dark.colors.gray100};
  border-radius: ${(props) => props.theme.dark.radius.base};
  background-color: ${(props) => props.theme.dark.colors.black300};
`;
