import React from 'react';
import { LoginWrapper, LoginHeader } from './style';
import LoginForm from './LoginForm';

const Login: React.VFC = () => {
  return (
    <LoginWrapper>
      <LoginHeader>
        Welcome to this Note Cards App
      </LoginHeader>
      <LoginForm />
    </LoginWrapper>
  )
}

export default Login;