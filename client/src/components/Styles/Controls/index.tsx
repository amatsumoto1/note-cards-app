import styled from 'styled-components';

const DEFAULT_INPUT_FONT_SIZE = '16px';
const DEFAULT_INPUT_PADDING_VERTICAL = '0.2rem';
const DEFAULT_INPUT_PADDING_HORIZONTAL = '0.3rem';

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
  borderRadius?: string | number,
  paddingVertical?: string | number,
  paddingHorizontal?: string | number
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  font-size: ${({ fontSize }) => convertToPixelSize(fontSize)};
  border-radius: ${({ borderRadius, theme }) => 
    borderRadius ? convertToPixelSize(borderRadius) : theme.borderRadius.input
  };
  border-width: 1px;
  padding: ${( { paddingVertical, paddingHorizontal }) => 
    `${convertToPixelSize(paddingVertical)} ${convertToPixelSize(paddingHorizontal)}`
  };
`;
Input.displayName = 'Input';

Input.defaultProps = {
  fontSize: DEFAULT_INPUT_FONT_SIZE,
  paddingVertical: DEFAULT_INPUT_PADDING_VERTICAL,
  paddingHorizontal: DEFAULT_INPUT_PADDING_HORIZONTAL
};


const convertToPixelSize = (size?: string | number) : string | undefined => {
  if (typeof(size) === 'string') {
    return size;
  }
  else if (typeof(size) === 'number') {
    return `${size}px`;
  }
  return '';
}