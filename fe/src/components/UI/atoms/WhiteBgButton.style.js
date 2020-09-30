import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  font-size: 1.4rem;
  background: ${(props) => props.theme.white};
  padding: 8px 22px;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.blackLight};
  vertical-align: middle;
  border-radius: 3px;

  &:hover {
    background: ${(props) => props.theme.whiteDark};
    color: ${(props) => props.theme.blackLight};
  }
`;
