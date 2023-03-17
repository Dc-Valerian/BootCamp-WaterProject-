import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from '../About/About'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Detail from "../Detail/Detail"
import HomeScreen from '../HomeScreen'
import LandingPage from "../LandingPage"

const AllRoutes = () => {
    let element =useRoutes ([
        {
            path:"/",
            element:<HomeScreen/>
        },
        {
            path:"signup",
            element:<Register/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },{
            path:"/homepage",
            element:<LandingPage/>
        },{
            path:"/about",
            element:<About/>
        },{
            path:"/detail",
            element:<Detail/>
        }
    ])
  return element;
}

export default AllRoutes