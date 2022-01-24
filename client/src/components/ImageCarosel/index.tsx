import React from 'react';
import { ImageCaroselWrapper } from './style';

type Props = {
  width?: string,
  flex?: number
}

const ImageCarosel: React.VFC<Props> = ({ width, flex }: Props) => {
  return (
    <ImageCaroselWrapper
      caroselWidth={width}
      flex={flex}
    >
    </ImageCaroselWrapper>
  )
}

export default ImageCarosel;