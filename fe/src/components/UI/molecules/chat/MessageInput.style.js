import styled from 'styled-components';
import { BiPaperPlane } from 'react-icons/bi';

export const Container = styled.div`
  height: 100%;
`;

export const InputContainer = styled.div`
  display: inline-block;
  width: 90%;
  height: 100%;
  vertical-align: middle;
  border-radius: inherit;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  background: ${(props) => props.theme.blue};
  width: 10%;
  height: 100%;
  vertical-align: middle;
  border-radius: inherit;
`;

export const StyledPaperPlane = styled(BiPaperPlane)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.6rem;
  color: ${(props) => props.theme.white};
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(72%);
    font-size: 2.74rem;
  }
`;
