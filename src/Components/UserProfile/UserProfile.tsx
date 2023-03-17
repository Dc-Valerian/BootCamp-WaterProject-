import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import imag from "../assets/Logo2.png";
import { IoIosPerson } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";

const UserProfile: React.FC = () => {
  return (
    <div>
      <Container>
        <Profile>
          {/* ---------- Profile Image ----------- */}
          <MyAcct>
            <ProfilePics>
              <Icons>
                <IoIosPerson />
              </Icons>
            </ProfilePics>
            <First>
              <My>My Account</My>
              <Name>Odebode David</Name>
              <br />
              <br />
              <br />
              <Trans>Transaction History:</Trans>
            </First>
            {/*------------------ Transaction Details ----------------- */}
            <Statement>
              <DetailPay>
                <One>
                  <Date>Tue Mar 14, 2023 20:00pm</Date>
                  <Price>NGN 5000.00</Price>
                </One>
                <Two>
                  <AcctName>VIVIAN SARAH</AcctName>
                </Two>
              </DetailPay>
            </Statement>
          </MyAcct>
          {/* ------------ Account Details ------------- */}
          <AcctBalance>
            <Finance>Account Details </Finance>
            <Details>
              <Comp1>
                <Names>Name:</Names>
                <UserName>Odebode David Micheal</UserName>
              </Comp1>
              <Comp2>
                <Email>Email:</Email>
                <UserEmail>CodeLab2020@gmail.com</UserEmail>
              </Comp2>
              <Comp3>
                <Add>Address:</Add>
                <UserAdd>No.58 GbaGbos Street, Ajegunle, Lagos-State.</UserAdd>
              </Comp3>
              <Comp4>
                <Phn>Phone No:</Phn>
                <UsersPhn>+234 9074826082</UsersPhn>
              </Comp4>
              <EditAcct>Edit Account</EditAcct>
            </Details>
            <br />
            <Top>
              <Bal bg="#0d60d8">
                <Icn>
                  <GiMoneyStack />
                </Icn>
                <TheTwo>
                  <Tt>Total Money</Tt>
                  <Amt>NGN 25000.00</Amt>
                </TheTwo>
              </Bal>
              <Bal bg="#7913e5">
                <Icn>
                  <FaChartLine />
                </Icn>
                <TheTwo>
                  <Tt>Interest Rate</Tt>
                  <Amt>10%</Amt>
                </TheTwo>
              </Bal>
            </Top>
            <Exit>Back to Product</Exit>
          </AcctBalance>
        </Profile>
      </Container>
    </div>
  );
};

export default UserProfile;

const EditAcct = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #644ff6;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 20px;

  :hover {
    cursor: pointer;
  }
`;
const Exit = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #644ff6;
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-top: 30px;

  :hover {
    cursor: pointer;
  }
`;
const Comp4 = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;
const Phn = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
  color: #030614;
`;
const UsersPhn = styled.div`
  font-size: 18px;
  color: #030614;
`;
const Comp3 = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;
const Add = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
  color: #030614;
`;
const UserAdd = styled.div`
  font-size: 18px;
  color: #030614;
`;
const Comp2 = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;
const Email = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
  color: #030614;
`;
const UserEmail = styled.div`
  font-size: 18px;
  color: #030614;
`;

const Comp1 = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;
const Names = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
  color: #030614;
`;
const UserName = styled.div`
  font-size: 18px;
  color: #030614;
`;
const Details = styled.div`
  width: 100%;
  height: auto;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  border: 2px solid black;

  @media screen and (max-width: 425px) {
    width: 400px;
  }
`;
const Finance = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: blue; */
  display: flex;
  color: #644ff6;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 600;
`;
const Top = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  /* background-color: red; */
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: none;
  }

  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: space-around;
    width: 400px;
  }
`;
const Tt = styled.div`
  font-size: 15px;
`;
const Amt = styled.div`
  font-size: 22px;
  font-weight: 700;
`;
const Icn = styled.div`
  height: 100%;
  width: 70px;
  background-color: transparent;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TheTwo = styled.div`
  width: 180px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    width: 120px;
    height: 100%;
  }
`;
const Bal = styled.div<{ bg: string }>`
  width: 250px;
  height: 120px;
  background-color: ${(props) => props.bg};
  display: flex;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 425px) {
    display: flex;
    width: 180px;
    height: 90px;
  }
`;
const One = styled.div`
  width: 400px;
  height: 30px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    width: 350px;
  }
`;
const Two = styled.div`
  display: flex;
  width: 400px;
  height: 30px;
  align-items: center;
`;
const Date = styled.div`
  margin-left: 10px;
  color: #030614;

  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
`;
const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: #007800;

  @media screen and (max-width: 425px) {
    margin-right: 5px;
    font-size: 20px;
    font-weight: 700;
  }
`;
const AcctName = styled.div`
  margin-left: 10px;
  font-size: 23px;
  font-weight: 700;
  font-family: "Open Sans" sans-serif;
  color: #030614;

  @media screen and (max-width: 425px) {
    font-size: 20px;
    font-weight: 600;
  }
`;
const DetailPay = styled.div`
  width: 400px;
  height: 60px;
  /* background-color: blueviolet; */
  border-bottom: 2px solid #644ff6;

  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    width: 400px;
    flex-direction: column;
  }
`;
const Trans = styled.div`
  font-family: U8, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: white;
`;
const My = styled.div`
  font-family: U8, sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: white;
`;
const Name = styled.div`
  font-family: U8, sans-serif;
  font-size: 15px;
  margin-top: 10px;
  color: white;
`;
const Icons = styled.div`
  font-size: 90px;
  color: #644ff6;
`;
const ProfilePics = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const First = styled.div`
  width: 400px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  /* background-color: white; */
  margin-top: 20px;

  @media screen and (max-width: 425px) {
    width: 370px;
  }
`;
const Statement = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
  overflow-y: scroll;

  /* ------- Hiding a ScrollBar ------- */
  ::-webkit-scrollbar {
    width: 0px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    width: 370px;
    height: 450px;
    border-radius: 10px;
  }
`;
const AcctBalance = styled.div`
  width: 580px;
  height: 90%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: none;
  }

  @media screen and (max-width: 425px) {
    width: 390px;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
`;
const MyAcct = styled.div`
  width: 500px;
  height: 90%;
  background-color: #644ff6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 400px;
    height: auto;
    display: flex;
    padding-bottom: 20px;
    flex-direction: column;
    margin-top: 20px;
  }
`;
const Profile = styled.div`
  width: 80%;
  padding-bottom: 10px;
  /* background-color: #676767; */
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
    display: flex;
    width: 425px;
    height: 100%;
    /* flex-wrap: wrap; */
    flex-direction: column;
  }
`;
const Container = styled.div`
  /* background-color: red; */
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;
  color: white;
  display: flex;

  @media screen and (max-width: 425px) {
    display: flex;
    width: 425px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
