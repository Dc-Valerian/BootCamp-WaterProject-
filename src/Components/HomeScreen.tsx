import React from 'react'
import Header from './Header/Header'
import Chart from './Home/Chart'
import Deliver from './Home/Deliver'
import Footer from './Home/Footer'
import Hero from './Home/Hero'
import Online from './Home/Online'
import Story from './Home/Story'

const HomeScreen = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Online/>
        <Chart/>
        <Story/>
        <Deliver/>
        <Footer/>
    </div>
  )
}

export default HomeScreen