import styled from 'styled-components';
import { color } from '@styles/mixins/text';

export const Title = styled.h1`
  position: relative;
  display: inline-block;
  text-align: center;
  z-index: 2;
  margin: 1rem 0;
  font-family: 'Mulish', 'Nanum Gothic', sans-serif;
  font-size: 3.6rem;
  font-weight: 900;
  ${(props) => props.italic && 'font-style: italic;'}
  ${color}

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    z-index: 1;
    bottom: 8px;
    width: 100%;
    height: 16px;
    background: ${(props) => props.theme.white};
  }
`;
