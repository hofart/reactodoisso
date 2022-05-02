import styled, { css } from 'styled-components';

export const FieldsDefaultStyled = () => css`
  font-family: ${({ theme }) => theme.dark.fonts.primary};
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.dark.radius.base};
  color: ${({ theme }) => theme.dark.colors.gray100};
  background-color: transparent;
  padding: .5rem;
  border: none;

  &::placeholder {
    padding-left: 5px
  }

  &::focus-visible {
    background-color: transparent;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 1rem;
`;

export const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'ex: Meeting tomorrow 08:00 AM',
  name: 'title',
})`
  ${FieldsDefaultStyled}
`;

export const TextArea = styled.textarea.attrs({
  placeholder: 'Description',
  name: 'content',
})`
  ${FieldsDefaultStyled};
  resize: none;
`;

export const Box = styled.div`
  display: flex;
  gap: .5rem;
`;
