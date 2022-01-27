import styled from 'styled-components';
import { Flex, FlexCenter } from '../../../components/Styles/Flexbox';
import { ShadowedStyle } from '../../../components/Styles/Common';

export const LoginFormCard = styled(FlexCenter)`
  ${ShadowedStyle}
  padding: 1rem 0.5rem;
  margin-top: 2rem;
  min-width: 25rem;
  border-radius: 5px;
`;
LoginFormCard.displayName = 'LoginFormCard';

export const LoginFormHeader = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
`;
LoginFormHeader.displayName = 'LoginFormHeader';


export const LoginFormContainer = styled.form`
  width: 100%;
  border-top: 1px solid gray;
`;
LoginFormContainer.displayName = 'LoginFormContainer';


export const LoginFormRow = styled(Flex)`
  width: 100%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
`;
LoginFormRow.displayName = 'LoginFormRow';