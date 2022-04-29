import styled, { createGlobalStyle } from 'styled-components';

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
    background-color: ${(props) => props.theme.dark.colors.black200};
    font-family: ${(props) => props.theme.dark.fonts.primary};

    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: white;
  }

  li {
    list-style: none;
  }
`;

export const Main = styled.main`
  margin-inline: auto;
  width: min(100% - 2rem, 650px);
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.Size};
`;

export const Span = styled.span`
  color: ${(props) => props.theme.dark.colors.gray100};
  font-size: ${(props) => props.Size};
  font-weight: ${(props) => props.Weight};
  margin-left: ${(props) => props.marginLeft};
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

export const Typography = styled.p`
  font-size: ${(props) => props.Size || '.875rem'};
  color: white;
`;
