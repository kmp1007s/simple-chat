import { css } from 'styled-components';

export const color = (props) => css`
  color: ${() => {
    switch (props.color) {
      case 'primary':
        return props.theme.primary;
      case 'contrast':
        return props.theme.contrast;
      case 'white':
        return props.theme.white;
      default:
        return props.theme.black;
    }
  }};
`;
