import React from "react";
import styled from "styled-components";
import bg from "./Assets/water.png";
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        {/* <One> */}
        <Box>
          <Sign>
            Sign in
            <Please>Please input your details</Please>
          </Sign>

          <Input>
            <Email>Email</Email>
            <input type="text" />
            <Email>Password</Email>
            <input type="password" />
          </Input>
          <button>Sign in</button>
          <Signn>
            Don't have an acount?{" "}
            <NavLink to="/signup">
              <span
                style={{
                  color: "#030614",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                Sign up
              </span>
            </NavLink>
          </Signn>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Signin;

const Email = styled.div`
  font-size: 11px;
  margin-top: 15px;
  margin-bottom: 5px;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Signn = styled.div`
  font-size: 12px;
  color: lightgray;
  margin-top: 40px;
  margin-left: 20px;
`;
const Input = styled.div`
  width: 100%;
  color: #030614;
  /* background-color: red; */
`;

const Two = styled.div``;

const Sign = styled.div`
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 800px) {
    /* background-color: #1b1b44; */
    font-size: 20px;
  }
`;
const Please = styled.div`
  font-size: 12px;
  line-height: 30px;
  /* margin-top: 10px; */
  color: lightgray;
  @media (max-width: 800px) {
    /* background-color: #1b1b44; */
    font-size: 9px;
  }
  /* margin-bottom: 25px; */
`;
const Google = styled.div`
  border: 1px solid lightgray;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35px;
  font-size: 12px;
  border-radius: 10px;
  cursor: pointer;
`;

// const Second = styled.div``
// const Second = styled.div``
// const Second = styled.div``

const Box = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  /* border: 1px solid black; */
  border-radius: 20px;
  background-color: white;
  width: 25%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 600px) {
    /* background-color: #1b1b44; */
    width: 40%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  input {
    border: none;
    font-size: 15px;
    outline: none;
    border-bottom: 1px solid lightgray;
    width: 100%;
  }
  button {
    margin-top: 50px;
    background-color: #030614;
    color: white;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }
`;

const One = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  align-items: center;
  background-image: url(${bg});
  background-color: #c1cbd6;
  /* width: 50%;
  height: 100%; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-color: red; */
  position: relative;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #414040a1;
    opacity: 0.8;
    position: absolute;
  }
`;

const Container = styled.div`
  /* background-color: rgb(230, 232, 236);
  display: flex;
  align-items: center;
  justify-content: center;  */
`;
