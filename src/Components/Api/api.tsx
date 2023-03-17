import axios from "axios"
interface User{
    name:string,
    email:string,
    password:string,
    phoneNumber:number,
    Address:string,
}

export const CreateUser = async({name,email,password,phoneNumber,Address}:any)=>{
    return await axios.post(`http://localhost:2244/api/register,{name,email,password,phoneNumber}`).then((res)=>{
       return res.data
    })
}
export const LoginUser = async({name,email,}:any)=>{
    return await axios.post(`http://localhost:2244/api/login{email,password}`).then((res)=>{
       return res.data
    })
}