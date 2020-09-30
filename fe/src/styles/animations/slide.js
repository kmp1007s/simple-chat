import { keyframes } from 'styled-components';

export const slideFromLeft = keyframes`
  from {
    transform: translateX(-68px);
  } to {
    transform: translateX(0);
  }
`;

export const slideFromRight = keyframes`
  from {
    transform: translateX(68px);
  } to {
    transform: translateX(0);
  }
`;
