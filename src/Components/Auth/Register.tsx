import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import img from "../Assets/img8.jpg"
import logo from "../Assets/water3-rmbg.png"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { RegisterUser } from "../States/ReduxState";
import { CreateUser } from "../Api/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispach } from "../States/Store";
import Swal from "sweetalert2";

const Signin = () => {

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
    <Container>
      <Card>
        <Left>
      <NavLink to="/">
      <Logo src={logo}/>
      </NavLink>
          {/* <Top> */}
            <h2>Clean Drops</h2>
          {/* </Top> */}
      <Form>
      <Input type="text" placeholder='Enter your name' />
          <Input type="email" placeholder='Enter your Email' />
          <Input type="text" placeholder='Enter your Home Address'/>
          <Input type="password" placeholder='Enter your password'/>
          <Input type="password" placeholder='Re-Enter Your Password'/>
          <NavLink to="/Dashboard" style={{textDecoration: "none"}}>
            <Button>Sign Up</Button>
          </NavLink>
      </Form>
          <NavLink to="/login" style={{textDecoration: "none"}}>
              <p>Don't Have an Account? <span>Sign In</span></p>
          </NavLink>
        </Left>
        <Right>
          <Img src={img} />
        </Right>  
      </Card>
    </Container>
  )
}

export default Signin
const Form = styled.form`
width: 500px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Logo = styled.img`
width: 200px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width:500px) {
    display: none;
  }
`
const Button = styled.button`
  width: 160px;
  height: 45px;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  align-items: center;
  color: #fff;
  background-color: #030614;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  border-radius: 50px;
  margin-top: 20px;
  :hover{
    background-color: #fff;
    color:#030614;
    border: 1px solid #030614;
  }
`
const Input = styled.input`
  width: 70%;
  height: 80px;
  margin-bottom: 10px;
  border: 1px solid #f1f1f1;
  outline: none;
  border-radius: 3px;
  padding-left: 10px;
  margin-top: 15px;
`
const Top = styled.div`
  h2{
    color: #03993f;
  }
`
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  span{
    color: #030614;
  }
  p{
    color: #c2c2c2;
    margin: 0;
    margin-top: 7px;
    font-size: 14px;
    cursor: pointer;
  }

  h2{
  margin-top: -20px;
  }

  @media screen and (max-width: 500px) {
    width: 900%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    margin-bottom: 30px;
  }
`
const Right = styled.div`
  width: 50%;
  display: flex;
`
const Card = styled.form`
  width: 800px;
  height: 600px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  overflow: hidden;
  border-radius: 10px;


`

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
