import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0px;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.grayDark};
  border-bottom: 1px solid ${(props) => props.theme.grayDark};
  padding: 0.7rem;
`;

export const Message = styled.span`
  font-size: 1.67rem;
  color: ${(props) => props.theme.grayDark};
`;
