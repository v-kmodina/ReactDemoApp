import React, { useState } from 'react';
import styled from 'styled-components';
import useUserStore from '../store/useUserStore';

const LoginFormContainer = styled("div")({
    textAlign: "left",
    fontSize: 13,
    color: "#3c3b3f",
    backgroundColor: "#f5f5f5",
    backgroundClip: "border-box",
    border: "1px solid #f5f5f5",
    borderRadius: 0,
    width: "max-content",
    lineHeight: "22px",
    boxShadow: "0 6px 12px rgb(0 0 0 / 18%)",
});

const LoginForm = styled("form")({
    padding: 20
});

const InputContainer = styled("label")({
    display: "grid",
    textAlign: "left"
});

const InputText = styled("input")({
    width: 318,
    height: 42,
    color: "#01426a",
    border: "1px solid #c8c9c7",
    borderRadius: 2,
    padding: "0 10px",
    fontSize: 14,
    lineHeight: "1.72857px",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    display: "block",
    boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%)",
    "&:focus-within, &:focus": {
        outline: "medium auto #01426a66"
    }
});

const SignInBtn = styled("button")({
    width: "100%",
    height: 42,
    background: "#48850b",
    color: "#fff",
    borderRadius: 2,
    textTransform: "uppercase",
    border: "1px solid transparent",
    "&:hover": {
        background: "#2f5607",
        border: "#294c06"
    }
});

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { updateIsLoggedIn } = useUserStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setMessage('Login successful');
      updateIsLoggedIn(true);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer>
        User ID or Mileage Plan™ number
          <InputText type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </InputContainer>
        <br />
        <InputContainer>
        Password
          <InputText type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputContainer>
        <br />
        <SignInBtn type="submit">SIGN IN</SignInBtn>
      </LoginForm>
      <p>{message}</p>
    </LoginFormContainer>
  );
};

export default LoginPage;
