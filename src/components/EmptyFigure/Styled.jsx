import styled from 'styled-components';
import img from '../../public/empty.svg';

export const Figure = styled.figure`
  display: grid;
  place-items: center;
`;

export const Image = styled.img.attrs({
  src: `${img}`,
  alt: 'No Todo`s',
})`
  width: min(100%, 250px);
`;
