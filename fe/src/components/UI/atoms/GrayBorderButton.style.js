import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.gray};
  font-size: 1.4rem;
  background-color: transparent;
  padding: 8px 22px;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.grayDark};
  vertical-align: middle;
  border-radius: 3px;

  &:hover {
    border-color: ${(props) => props.theme.grayDark};
  }
`;
