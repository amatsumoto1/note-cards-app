import React from 'react';
import { Input } from '../../Styles/Controls';

type OwnProps = {
  error?: string
}

type Props = OwnProps & React.InputHTMLAttributes<HTMLInputElement>;

const ValidatedInput: React.VFC<Props> = ({ error, ...rest }: Props) => {
  return (
    <>
      <Input {...rest} />
    </>
  )
}

export default ValidatedInput;