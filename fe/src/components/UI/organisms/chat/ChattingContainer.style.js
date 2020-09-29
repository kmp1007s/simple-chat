import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.whiteDark};
  padding: 8px 34px;
  overflow-y: auto;
`;
