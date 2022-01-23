import styled from 'styled-components';

export const CenteredHeader = styled.h1`
  text-align: center;
`;
CenteredHeader.displayName = 'CenteredHeader';

export const CenteredFullHeader = styled(CenteredHeader)`
  width: 100%;
`;