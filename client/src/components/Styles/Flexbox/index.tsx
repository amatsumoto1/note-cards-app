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


type FlexGrowProps = {
  flexGrow?: number
}

export const FlexGrow = styled.div<FlexGrowProps>`
  flex-grow: ${props => props.flexGrow}
`;
FlexGrow.displayName = 'FlexGrow';

FlexGrow.defaultProps = {
  flexGrow: 1
}