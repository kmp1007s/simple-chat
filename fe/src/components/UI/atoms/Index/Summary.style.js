import styled from 'styled-components';
import { color } from '@styles/mixins/text';

export const Summary = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  ${(props) => props.italic && 'font-style: italic;'}
  ${color}
`;
