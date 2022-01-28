import styled from 'styled-components';

type FlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';

type FlexProps = {
  flexDirection?: FlexDirection
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;
Flex.displayName = 'Flex';

Flex.defaultProps = {
  flexDirection: 'column'
}


export const FlexCenter = styled(Flex)`
  align-items: center;
`;
FlexCenter.displayName = 'FlexCenter';


type FlexGrowProps = {
  flexGrow?: number
}

export const FlexGrow = styled.div<FlexGrowProps>`
  flex-grow: ${({ flexGrow }) => flexGrow}
`;
FlexGrow.displayName = 'FlexGrow';

FlexGrow.defaultProps = {
  flexGrow: 1
}