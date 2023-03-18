import React from "react";
import styled from "styled-components";
// import bg from "../Assets/water.jpg";
import bg from "../Assets/water.png";
import bg from "../Assets/water.png";
import bg from "../Assets/water.png"
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { RegisterUser } from "../States/ReduxState";
import { CreateUser } from "../Api/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispach } from "../States/Store";
import Swal from "sweetalert2";

const Signup = () => {
  const dispatch = UseAppDispach()
  const schema = yup
    .object({
      name: yup.string().required("Name is a Required Field"),
      email: yup.string().email().required("Please Enter Your Valid Email Address"),
      homeAddress: yup.string().required("This is a required Field"),
      password: yup.string().min(5).required("Please enter a password"),
      confirmpassword: yup.string().oneOf([yup.ref("password")]).required(),
    }).required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });
    const Post=useMutation({
      mutationKey:["post"],
      mutationFn:CreateUser,
      onSuccess:(data:any)=>{
        dispatch(RegisterUser(data.data))
      }
    })
    const submit = handleSubmit((data)=>{
      Post.mutate(data)
      Swal.fire({
        title:`Successfully Register`,
        icon:"success"
       })
      reset()
    })
  return (
    <Container id="register">
      <Wrapper>
        {/* <One> */}
        <Box>
          <Sign>
            Sign up
            <Please>Please input your details</Please>
          </Sign>

          <Input onSubmit={submit}>
            <Email>Name</Email>
            <input {...register("name")} type="text" />
            {/* <p>{errors?.name && errors?.name?.message}</p> */}

            <Email>Email</Email>
            <input {...register("email")} type="email" />
            {/* <p>{errors?.name && errors?.email?.message}</p> */}

            <Email>Home Address</Email>
            <input {...register("homeAddress")} type="text" />
            {/* <p>{errors?.name && errors?.email?.message}</p> */}

            <Email>Password</Email>
            <input {...register("password")} type="password" />
            {/* <p>{errors?.password && errors?.password?.message}</p> */}

            <Email>Confirm Password</Email>
            <input {...register("confirmpassword")} type="password" />
            {/* <p>{errors?.confirmpassword && errors?.confirmpassword?.message}</p> */}
          <button type="submit">Sign up</button>
          </Input>
          <Signin>
            Do you have an acount?{" "}
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#030614",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Sign in
              </span>
            </NavLink>
          </Signin>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Signup;

const Email = styled.div`
  font-size: 11px;
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Signin = styled.div`
  font-size: 12px;
  color: lightgray;
  margin-top: 30px;
  color: #644ff6;
`;
const Input = styled.form`
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
  color: #644ff6;
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
  padding-left: 25px;
  padding-right: 25px;
  /* border: 1px solid black; */
  border-radius: 20px;
  background-color: white;
  width: 25%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 800px) {
    /* background-color: #1b1b44; */
    width: 30%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  input {
    border: none;
    font-size: 15px;
    outline: none;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #654ff652;
    /* background-color: #644ff6; */
    /* border-bottom: 1px solid lightgray; */
    width: 100%;
  }
  button {
    margin-top: 30px;
    background-color: #644ff6;
    color: white;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    :hover {
      background-color: #030614;
      transform: all 350ms;
    }
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
  background-color: #030614;

  object-position: center;
  object-fit: cover;
`;

const Container = styled.div`
  /* background-color: rgb(230, 232, 236); */
  display: flex;
  align-items: center;
  justify-content: center;
`;
