import styled from 'styled-components';
import { slideFromRight } from '@styles/animations/slide';

export const Container = styled.div`
  float: right;
  animation: ${slideFromRight} 0.3s ease;

  & + * {
    clear: right;
  }
`;
