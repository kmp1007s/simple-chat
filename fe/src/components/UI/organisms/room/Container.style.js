import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  border-bottom: 2px solid ${(props) => props.theme.grayLight};
`;
