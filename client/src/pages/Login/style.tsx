import styled from 'styled-components';
import { FlexCenter } from '../../components/Styles/Flexbox';
import { CenteredFullHeader } from '../../components/Styles/Header';

const LOGIN_HEADER_FONT_SIZE = '2rem';

export const LoginWrapper = styled(FlexCenter).attrs({as: 'main'})`
`;
LoginWrapper.displayName = 'LoginWrapper';

export const LoginHeader = styled(CenteredFullHeader)`
  margin: 2rem 0 0.5rem;
  font-size: ${LOGIN_HEADER_FONT_SIZE};
`;
LoginHeader.displayName = 'LoginHeader';