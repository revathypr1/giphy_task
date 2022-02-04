import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import bg_1 from "../assets/images/catgiph.gif";
import { BASE_URL } from "../axiosConfig";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");

  const history = useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios
    .post(`${BASE_URL}/auth/token/`,{username,password})
    .then((res)=>{
      // console.log(res.data);
      let data = res.data; 
      console.log(data);
      localStorage.setItem("user_data",JSON.stringify(data))
      history.push('/giphy')

    })
    .catch((error)=>{
      console.log(error);

    })
    
  }

  return (
    <Container>
      <LoginBox>
        <Top>
          <LogoContainer></LogoContainer>
          <Title>Login</Title>
        </Top>
        <CredentialsForm
          onSubmit={handleSubmit}
        >
          <Credential>
            <Label for="username">Username</Label>
            <Input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Credential>
          <Credential>
            <Label for="password">Password</Label>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Credential>
          <Submit>Login</Submit>
        </CredentialsForm>
      </LoginBox>
      <Goto>
        Don't have an account yet,
        <Link to="/Signup">
          <Span className="signup"> click here to Sign up..!</Span>
        </Link>
      </Goto>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: url(${bg_1});
  background-repeat: no-repeat;
  background-size: contain;
`;
const LoginBox = styled.div`
  width: 31%;
  margin: auto;
  border-radius: 4px;
  margin-left: 68%;
  color: #fff;
  @media all and (max-width: 980px) {
    width: 55%;
  }
  @media all and (max-width: 640px) {
    width: 80%;
  }
`;
const Top = styled.div``;
const LogoContainer = styled.h1`
  margin: 0 auto;
  width: 75px;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
  filter: invert(36%) sepia(24%) saturate(8%) hue-rotate(12deg) brightness(101%)
    contrast(89%);
`;
const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;
const CredentialsForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 15px;
`;
const Credential = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Label = styled.label`
  font-size: 20px;
  width: 100px;
  @media all and (max-width: 640px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;
const Input = styled.input`
  padding: 12px 5px;
  background: #fff;
  border: 1px solid #656565;
  border-radius: 2px;
  color: #656565;
  font-size: 16px;
  @media all and (max-width: 640px) {
    width: 85%;
  }
`;
const Submit = styled.button`
  display: inline-block;
  width: 204px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  text-align: a;
  margin-left: 39%;
  background: #fff;
  border: 1px solid #656565;
  border-radius: 2px;
  color: #000;
  @media all and (max-width: 640px) {
    margin-top: 15px;
  }
`;
const Goto = styled.h6`
  text-align: center;
  margin: 20px 0;
  font-size: 14px;
  color: #fff;
`;
const Span = styled.span`
  color: #1e9cce;
`;
