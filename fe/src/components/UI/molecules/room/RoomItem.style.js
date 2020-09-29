import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.whiteDark};
  padding: 1.8rem;
  border-bottom: 1px solid ${(props) => props.theme.grayLight};
  transition: all 0.4s ease;

  &:hover {
    background: ${(props) => props.theme.grayLight};
  }
`;
