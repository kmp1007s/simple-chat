import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: inherit;
  color: ${(props) => props.theme.blackBright};
  transition: all 0.35s ease;
  padding: 9px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.blue};
    color: ${(props) => props.theme.blue};
  }
`;
