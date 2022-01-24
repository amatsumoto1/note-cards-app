import styled from 'styled-components';

type ImageCaroselWrapperProps = {
  caroselWidth?: string,
  flex?: number
}

export const ImageCaroselWrapper = styled.div<ImageCaroselWrapperProps>`
  width: ${props => props.caroselWidth};
  flex: ${props => props.flex};
`;
ImageCaroselWrapper.displayName = 'ImageCaroselWrapper';

ImageCaroselWrapper.defaultProps = {
  caroselWidth: '100%'
}