import React from 'react'
import Slider from "react-slick"
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <center>Single Item</center>

      <Slider {...settings}>
      <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>Hy</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
      </Slider>
    </Container>
  )
}

export default Hero



const Container = styled.div`
margin-top: 30px;
`