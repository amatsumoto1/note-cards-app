import styled from 'styled-components';
import { Flex } from '../../components/Styles/Flexbox';
import { CenteredFullHeader } from '../../components/Styles/Header';

const LOGIN_HEADER_FONT_SIZE = '2.5rem';
const LOGIN_SUBHEADER_FONT_SIZE = '2.1rem';

export const LoginWrapper = styled(Flex).attrs({as: 'main'})`
`;
LoginWrapper.displayName = 'LoginWrapper';

export const LoginHeader = styled(CenteredFullHeader)`
  font-size: ${LOGIN_HEADER_FONT_SIZE};
`;
LoginHeader.displayName = LoginHeader.name;

export const LoginSubheader = styled(CenteredFullHeader).attrs({as: 'h2'})`
  font-size: ${LOGIN_SUBHEADER_FONT_SIZE};
`;
LoginSubheader.displayName = LoginSubheader.name;