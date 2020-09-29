import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const TopArea = styled.div`
  height: ${(props) => props.topRatio || 90}%;

  & > * {
    margin: 0;
  }
`;

export const BottomArea = styled.div`
  height: ${(props) => props.bottomRatio || 10}%;

  & > * {
    margin: 0;
  }
`;
