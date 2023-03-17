import React from "react";
import styled from "styled-components";
import pic from "../Assets/aboutwater.jpg";
import guy from "../Assets/guy.jpg";
import Footer from "../Home/Footer";

const About = () => {
  return (
    <Container>
      <One>About us</One>

      <Two>
        <Box>
          <img src={pic} />
        </Box>
        <Text>
          <span
            style={{
              fontSize: "25px",
              marginTop: "30px",
              lineHeight: "40px",
              color: "#644ff6",
            }}
          >
            Healthier alternative to drinking water{" "}
          </span>
          Our company, CleanDrops Co. Ltd. is a brand new, state of the art,
          water bottling company. Our focus is Alkaline Water which is a
          Healthier alternative to drinking water. CleanDrops offers a quality
          water product that exceeds current industry standards and adheres to
          the highest sanitary conditions. This process starts with the pumping
          of sea water from 280’ below the ground through our desalination plant
          where it is purified and treated to obtain optimal standards of 20.0
          (Total Dissolved Solids) and a PH of 8.0. The product water is then
          passed through an ozone system which is our final stage of sanitation.
        </Text>
      </Two>

      <Third>
        <Up>
          <Team>Team Member</Team>
          Make your employees more productive by having Clean Drops delivered to
          your office,Providing a healthier alternative for your water needs, to
          your front door.
        </Up>
        <Member>
          <Esther>
            <ImageHold src={guy} />

            <Name>Ovuoke E. Igho</Name>
            <Duty>Marketer</Duty>
          </Esther>
          <Esther>
            <ImageHold src={guy} />

            <Name>Ovuoke E. Igho</Name>
            <Duty>Marketer</Duty>
          </Esther>
          <Esther>
            <ImageHold src={guy} />

            <Name>Ovuoke E. Igho</Name>
            <Duty>Marketer</Duty>
          </Esther>
          <Esther>
            <ImageHold src={guy} />

            <Name>Ovuoke E. Igho</Name>
            <Duty>Marketer</Duty>
          </Esther>
        </Member>
      </Third>
      <Footer />
    </Container>
  );
};

export default About;

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   background-color: white;
//   justify-content: center;
//   height: 400px;
//   /* margin-top: 40px; */
// `;

const Member = styled.div`
  width: 75%;
  /* height: 270px; */
  /* background-color: red; */
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  @media (max-width: 600px) {
    /* background-color: #1b1b44; */
    justify-content: center;
  }
`;
const Esther = styled.div`
  width: 240px;

  height: 100%;
  /* background-color: blue; */
`;
const ImageHold = styled.img`
  height: 200px;
  width: 100%;
  /* background-color: aliceblue; */
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const Name = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;
const Duty = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: #030614d3;
`;

const Up = styled.div`
  width: 400px;
  text-align: center;
  margin-top: 80px;
  font-size: 15px;
  /* background-color: red; */
  @media (max-width: 600px) {
    /* background-color: #1b1b44; */
    font-size: 12px;
    width: 350px;
  }
`;
const Team = styled.div`
  font-size: 40px;
  color: #644ff6;
  @media (max-width: 600px) {
    /* background-color: #1b1b44; */
    font-size: 25px;
  }
`;

const Third = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  /* background-color: aqua; */
  /* height: 200px; */
  color: #030614;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 15px;
  line-height: 30px;
  width: 50%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  @media (max-width: 600px) {
    /* background-color: #1b1b44; */
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #030614;
  /* color: white; */

  /* background-color: #030614; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-size: 30px;
  font-weight: bold;
`;
const One = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  color: #644ff6;
  font-size: 40px;
  font-weight: bold;
`;
const Box = styled.div`
  height: 100%;
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    /* border: 1px solid rgb(6, 8, 21); */
  }
`;
const Two = styled.div`
  height: 70%;
  width: 75%;
  display: flex;
  @media (max-width: 900px) {
    /* background-color: #8b1b44; */
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* height:  ; */
  }

  /* background-color: red; */
`;
