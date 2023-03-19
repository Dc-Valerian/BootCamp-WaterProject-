import React from 'react'
import styled from 'styled-components'
import GlobalButton from "../../Components/GlobalProps/GlobalButton"
import bg from "../../Components/Assets/line3.png"


const Online = () => {
  return (
    <div>
        <Container>
            <Wrapper>
          
                <Second>
                 <Text>
                 Water is a vital resource for all {"  "}
                 <span>
                 living beings.
                 </span>
                 </Text>
                 <p>
                 Access to safe drinking water is still a challenge for many communities around the world.
                 <br />
                 1.4 million people die annually and 74 million will have their lives shortened by diseases related to poor water, sanitation and hygiene.
                 </p>
               
                </Second>

            </Wrapper>
        </Container>
    </div>
  )
}

export default Online


const Text = styled.div`
font-size: 40px;
font-weight: 700;
color: #030614;

@media screen and (max-width: 500px) {
    text-align: center;
    font-size: 40px;
}
@media screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
}

span{
    font-size: 40px;
font-weight: 700;
    color:#644FF6 ;
    @media screen and (max-width: 500px) {
    /* text-align: center; */
    font-size: 40px;
}  
@media screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
} 
}
`



const Second = styled.div`
margin-top: 80px;
display: flex;
flex-direction: column;
/* background-color: azure ; */
align-items: center;
justify-content: center;    

p{
    font-size: 15px;
    color: #030614;
    margin: 15px;
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 15px;
        margin-bottom: 180px;
    }
    @media screen and (max-width: 768px) {
    /* text-align: center; */
    font-size: 13px;
}

}

`



const Wrapper = styled.div`
/* background-color: aquamarine; */
width: 90%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
/* background-color: red; */
background-color: transparent;
/* background-image: url(${bg}); */
height: 300px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: -6%;
/* z-index: ; */

@media screen and (max-width: 320px) {
    /* bottom: 100px; */
    /* margin-top: -200px; */
    height: 380px;
    margin-top: 20%;
    /* background-color: red; */
}
@media screen and (max-width: 500px) {
    /* bottom: 100px; */
    /* margin-top: -200px; */
    margin-top: 15%;
}
`