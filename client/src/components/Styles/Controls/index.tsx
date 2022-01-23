import styled from 'styled-components';

const DEFAULT_INPUT_FONT_SIZE = '16px';

type LabelProps = {
  isRequired?: boolean,
  fontSize?: string | number,
}

export const Label = styled.label<LabelProps>`
  font-size: ${props => convertToPixelSize(props.fontSize)};
`;
Label.displayName = 'Label';

Label.defaultProps = {
  fontSize: DEFAULT_INPUT_FONT_SIZE
};


type InputProps = {
  fontSize?: string | number,
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  font-size: ${props => convertToPixelSize(props.fontSize)};
`;
Input.displayName = 'Input';

Input.defaultProps = {
  fontSize: DEFAULT_INPUT_FONT_SIZE
};


const convertToPixelSize = (size?: string | number) : string | undefined => {
  if (typeof(size) === 'string') {
    return size;
  }
  else if (typeof(size) === 'number') {
    return `${size}px`;
  }
  return undefined;
}