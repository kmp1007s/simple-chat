import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  padding: 16px;
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border-radius: 4px;
  font-size: 1.67rem;
  margin-bottom: 9px;
`;
