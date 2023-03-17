import styled from 'styled-components'
import GlobalButton from "../GlobalProps/GlobalButton"
// import bg from "../../Assets/line3.png"
import {CgProfile} from "react-icons/cg"
// import pic from "../../Assets/nice3rm.png"
// import bg1 from "../../Assets/BgImage.jpg"
import bg5 from "../Assets/bg5.jpg"
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <Container>
        {/* <Image>
          <Img src={bg5}/>
        </Image> */}
          <First>
           <Title>
           Online Water<br />
           Purchasing of Water Made Easy
            
           </Title>
            <Text>
            Water is the essential building block of life. <br />
             But it is more than just essential to quench thirst or protect health<br />
              Purchase Your Clean and healthy water at an affordable price
            </Text>

         <Button>
        <NavLink to="/register">
        <GlobalButton name='Start Now' bcc='#644FF6' border='none' cl='white' />
        </NavLink>
          <NavLink to="/login">
          <GlobalButton name='Learn More' bcc="transparent" border='1px solid white' cl='white'/>   
            </NavLink> 
         </Button>      
    
          </First>


        
      
      </Container>
    </div>
  )
}

export default Hero
const Pic = styled.img`
height: 600px;
width: 600px;
object-fit: cover;

@media screen and (max-width: 500px) {
  height: 350px;
  width: 290px;
  object-fit: contain;
  margin-bottom: 200px;
}
`

const Image = styled.div`
  background-color: red;
  height:400px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;

`
const Img = styled.img`
/* background-color: blue; */
height: 800px;
width: 800px;
object-fit: contain;
margin-top: 50%;
bottom: -150px;
left: -300px;
position: absolute;

@media screen and (max-width: 500px) {
  left: -300px;
  bottom: 0;
  height: 550px;
  width: 550px;
    display: flex;
  justify-content: center;
  align-items: center;
}
`

const Img1 = styled.img`
/* background-color: red; */
height: 50%;
width: 50%;
z-index: 9999;
object-fit: cover;
left: -60px;
bottom: 100px;
position: relative;

@media screen and (max-width: 500px) {
  left: -30px;
  bottom: 120px;
    display: flex;
  justify-content: center;
  align-items: center;
}
`

const Second = styled.div`
height: 500px;
width: 90%;
/* background-color: aliceblue; */
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
/* align-items: center; */
justify-content: center;

@media screen and (max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
}

`



const Button = styled.div`
display: flex;
margin-top: 10px;

@media screen and (max-width: 500px) {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  background-color: red; */
}
`
const Icon = styled.div`
margin-top: 15px;
font-size:30px;
color: white;
margin: 0;

`




const Title = styled.div`
font-size: 2.5em;
line-height: 50px;
text-align: center;
color:#030614;
font-style: italic;
z-index: 99999;
font-weight:900;
margin-bottom: 20px;

@media screen and (max-width: 500px) {
  font-size: 200%;
  line-height: 40px;
  font-weight: 800;
}

span{
  color: #723EE0;
  line-height: 60px;
  font-weight: bold;
}
p{
  color: white;

 
}
`
const Text = styled.div`
color:#030614;
line-height: 30px;
text-align: center;
@media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

const First = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
 /* display: flex; */
justify-content: center;
align-items: center;
position: relative;
z-index: 99999;




p{
  color: white;
}
`

const Wrapper = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
width: 90%;
/* background-color: yellowgreen; */
/* margin-top: -15%; */
margin: 0;

@media screen and (max-width: 500px) {
  flex-direction: column;

  
}
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #030614; */
/* padding-top: 100px; */
background-image: url(${bg5});
/* background-color: white; */
margin: 0;
height: 80vh;
padding-bottom: 50px;
padding-top: 80px;
backdrop-filter: blur(2px);
::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(3%, 16%, 16%, 0.7);
    position:absolute;
}

@media screen and (max-width: 500px) {
padding-top: 100px;
  
}
/* @media screen and (max-width: 1024) {
padding-top: 100px;
  
} */

`