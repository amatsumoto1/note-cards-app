import styled from 'styled-components';
import { FlexCenter } from '../../components/Styles/Flexbox';
import { CenteredFullHeader } from '../../components/Styles/Header';

const REGISTER_HEADER_FONT_SIZE = '2rem';

export const RegisterWrapper = styled(FlexCenter).attrs({as: 'main'})`
`;
RegisterWrapper.displayName = 'RegisterWrapper';


export const RegisterHeader = styled(CenteredFullHeader)`
  font-size: ${REGISTER_HEADER_FONT_SIZE};
`;
RegisterHeader.displayName = 'RegisterHeader';