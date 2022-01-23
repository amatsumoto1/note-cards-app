import { css } from 'styled-components';

export const ShadowedStyle = css`
  box-shadow: 0 0 10px ${props => props.theme.colors.shadow};
`;