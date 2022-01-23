import React, { useState } from 'react';
import { FormContainer } from './styles';
import { Input } from '../../../components/Styles/Controls';

const LoginForm: React.VFC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {

  }

  return (
    <FormContainer>

    </FormContainer>
  )
}