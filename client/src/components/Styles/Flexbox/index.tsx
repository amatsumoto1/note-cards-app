import styled from 'styled-components';

type FlexDirection = 'column' | 'row';

type FlexProps = {
  flexDirection?: FlexDirection
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
`;
Flex.displayName = 'Flex';

Flex.defaultProps = {
  flexDirection: 'column'
}

export const FlexCenter = styled(Flex)`
  align-items: center;
`;
FlexCenter.displayName = 'FlexCenter';