import React, { useState } from 'react';
import { LoginFormCard, LoginFormHeader, LoginFormContainer, LoginFormRow } from './styles';
import { Input, Label } from '../../../components/Styles/Controls';

const LoginForm: React.VFC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const onLoginSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <LoginFormCard>
      <LoginFormHeader>
        Login
      </LoginFormHeader>
      <LoginFormContainer onSubmit={onLoginSubmit}>
        <LoginFormRow>
          <Label htmlFor='username'>
            Username:
          </Label>
          <Input
            name='username'
            type='text'
            value={username}
            onChange={onInputChange}
            placeholder='Enter Username'
          />
        </LoginFormRow>
        <LoginFormRow>
          <Label htmlFor='password'>
            Password:
          </Label>
          <Input
            name='password'
            type='password'
            value={password}
            onChange={onInputChange}
            placeholder='Enter Password'
          />
        </LoginFormRow>
      </LoginFormContainer>
    </LoginFormCard>
  )
}

export default LoginForm;