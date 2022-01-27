import { css } from 'styled-components';

export const ShadowedStyle = css`
  box-shadow: 0 0 10px ${({theme}) => theme.colors.shadowDark};
`;