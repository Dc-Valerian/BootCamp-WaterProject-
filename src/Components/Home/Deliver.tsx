import React from 'react'
import styled from 'styled-components'
import pic from "../../Assets/nice3rm.png"
import GlobalButton from "../GlobalProps/GlobalButton"
import { NavLink } from 'react-router-dom'


const Deliver = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Img src={pic}/>
                </First>
                <Second>
                    <Title>
                    We Deliver The <br /> Quality Water
                   
                    </Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Magni excepturi dolorum  voluptatem optio voluptate dolor laudantium nesciunt  quam aliquam, numquam quas, veritatis autem beatae sed sint ab debitis. Quae, modi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Magni excepturi dolorum  voluptatem optio voluptate dolor laudantium nesciunt  quam aliquam, numquam quas, veritatis autem beatae sed sint ab debitis. Quae, modi.
                    </p>
             <NavLink to="/register">
             <GlobalButton name='Get Started' bcc="#644FF6" border='none' cl='white'/>      
                </NavLink>   
                    
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Deliver
const Img = styled.img``

const Title = styled.div`
font-size: 60px;
font-weight:600;
margin-top: 5px;
`



const Second = styled.div`
margin: 30px;
`

const First = styled.div``

const Wrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
margin-bottom: 30px;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #030614;
color: white;
margin-top: 50px;
width: 100%;
`