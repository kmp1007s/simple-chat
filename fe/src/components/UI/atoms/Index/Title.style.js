import styled from 'styled-components';
import { color } from '@styles/mixins/text';

export const Title = styled.h1`
  font-family: 'Mulish', 'Nanum Gothic', sans-serif;
  font-size: 3.6rem;
  font-weight: 900;
  ${(props) => props.italic && 'font-style: italic;'}
  ${color}
  margin: 1rem 0;
`;
