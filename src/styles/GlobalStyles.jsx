import styled, { createGlobalStyle } from 'styled-components';

export const Main = styled.main`
  margin-inline: auto;
  width: min(100% - 2rem, 650px);
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 2vw, 2.5rem);
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.dark.colors.gray100};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin-left: ${({ marginLeft }) => marginLeft};
`;

export const BtnWithIcon = styled.button.attrs({
  type: 'submit',
})`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  font-family: ${({ theme }) => theme.dark.fonts.primary};
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
  padding: ${({ padding }) => (padding ? '.5rem 1rem' : null)};
  border: ${({ theme, border }) => (border ? `1px solid ${theme.dark.colors.gray100}` : 'none')};
  border-radius: ${({ theme }) => theme.dark.radius.base};
  background-color: ${({ theme, bgColor }) => (bgColor ? theme.dark.colors.red : 'transparent')};

  &:hover {
    cursor: pointer
  }
`;

export const Typography = styled.p`
  font-size: ${({ size }) => size || '.875rem'};
  color: white;
`;

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.dark.colors.black200};
    font-family: ${({ theme }) => theme.dark.fonts.primary};
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: white;
  }

  li {
    list-style: none;
  }
`;
