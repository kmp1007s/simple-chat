import styled from 'styled-components';

export const Container = styled.div`
  float: right;

  & + * {
    clear: right;
  }
`;
