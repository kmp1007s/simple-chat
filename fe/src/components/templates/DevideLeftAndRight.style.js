import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // padding: 3rem 3rem;
`;

export const LeftArea = styled.div`
  ${(props) =>
    props.leftCenter &&
    'display: flex;\n  flex-direction: column;\n  justify-content: center;'}
  ${(props) => props.leftPadding && `padding: ${props.leftPadding};`}
  width: ${(props) => props.leftRatio || 30}%;
  height: inherit;
  float: left;

  & > * {
    margin: 0;
  }
`;
export const RightArea = styled.div`
  display: inline-block;
  width: ${(props) => props.rightRatio || 70}%;
  height: inherit;
  float: left;

  & > * {
    margin: 0;
  }
`;
