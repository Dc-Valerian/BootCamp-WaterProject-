import React from "react";
import styled from "styled-components";
import { IoIosPerson } from "react-icons/io";
import imag from "../assets/water-dispenser.png";

const CartList: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* --------------- The Profile -------------- */}
        <First>
          <ICon>
            <IoIosPerson />
          </ICon>
          <MyAcct>My Account:</MyAcct>
          <br />
          <NAme>Odebode David Micheal</NAme>
        </First>
        <CheckOut>Check Out</CheckOut>
        {/* --------------- Detailed Product ------------------ */}
        <List>
          <Details>
            <Wrap>
              <One>
                <DetailImage src={imag} />
              </One>
              <Two>
                <Wrap2>
                  <Qtys>
                    <Quantity>Quantity:</Quantity>
                    <Price>Price:</Price>
                  </Qtys>
                  <Qtys2>
                    <TotalQuantity>5</TotalQuantity>
                    <TotalPrice>(NGN)1500</TotalPrice>
                  </Qtys2>
                </Wrap2>
              </Two>
            </Wrap>
          </Details>
        </List>
        <List>
          <Details>
            <Wrap>
              <One>
                <DetailImage src={imag} />
              </One>
              <Two>
                <Wrap2>
                  <Qtys>
                    <Quantity>Quantity:</Quantity>
                    <Price>Price:</Price>
                  </Qtys>
                  <Qtys2>
                    <TotalQuantity>5</TotalQuantity>
                    <TotalPrice>(NGN)1500</TotalPrice>
                  </Qtys2>
                </Wrap2>
              </Two>
            </Wrap>
          </Details>
        </List>
        <List>
          <Details>
            <Wrap>
              <One>
                <DetailImage src={imag} />
              </One>
              <Two>
                <Wrap2>
                  <Qtys>
                    <Quantity>Quantity:</Quantity>
                    <Price>Price:</Price>
                  </Qtys>
                  <Qtys2>
                    <TotalQuantity>5</TotalQuantity>
                    <TotalPrice>(NGN)1500</TotalPrice>
                  </Qtys2>
                </Wrap2>
              </Two>
            </Wrap>
          </Details>
        </List>
        <List>
          <Details>
            <Wrap>
              <One>
                <DetailImage src={imag} />
              </One>
              <Two>
                <Wrap2>
                  <Qtys>
                    <Quantity>Quantity:</Quantity>
                    <Price>Price:</Price>
                  </Qtys>
                  <Qtys2>
                    <TotalQuantity>5</TotalQuantity>
                    <TotalPrice>(NGN)1500</TotalPrice>
                  </Qtys2>
                </Wrap2>
              </Two>
            </Wrap>
          </Details>
        </List>

        {/* -------------------- Check Out ---------------------- */}
        <FinalPay>
          <Pay>
            <TotalOrder>
              <TheOne>Total - Price:</TheOne>
              <TheTwo>(NGN)25000</TheTwo>
            </TotalOrder>
            <PayNow>Pay Now</PayNow>
          </Pay>
        </FinalPay>
      </Wrapper>
    </Container>
  );
};

export default CartList;

const TheOne = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const TheTwo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const TotalOrder = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const PayNow = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #644ff6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  :hover {
    cursor: pointer;
  }
`;
const Pay = styled.div`
  height: 100px;
  width: 400px;
  display: flex;
  /* background-color: aqua; */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const FinalPay = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: red; */
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
const List = styled.div``;
const TotalQuantity = styled.div`
  width: 200px;
  height: 40px;
  /* background-color: lightcoral; */
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  align-items: center;
  font-size: 25px;
  font-weight: 700;

  @media screen and (max-width: 425px) {
    width: 90px;
    height: 40px;
    font-size: 20px;
  }
`;
const TotalPrice = styled.div`
  width: 200px;
  height: 40px;
  /* background-color: lightcoral; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: 700;

  @media screen and (max-width: 425px) {
    width: 90px;
    height: 40px;
    font-size: 15px;
  }
`;
const Wrap2 = styled.div`
  height: 150px;
  /* background-color: brown; */
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    height: 90px;
    margin-right: 10px;
  }
`;
const Two = styled.div``;
const Qtys2 = styled.div`
  height: 100px;
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    width: 90px;
    height: 80px;
  }
`;
const Qtys = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    width: 90px;
    height: 80px;
  }
`;
const Price = styled.div`
  width: 150px;
  height: 40px;
  /* background-color: lightcoral; */
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 25px;
  font-weight: 700;

  @media screen and (max-width: 425px) {
    width: 90px;
    height: 40px;
    font-size: 20px;
  }
`;
const Wrap = styled.div`
  width: 80%;
  height: 150px;
  border-bottom: 2px solid black;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    width: 420px;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
  }
`;
const One = styled.div`
  width: 150px;
  height: 150px;
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-right: 2px solid black; */

  @media screen and (max-width: 425px) {
    width: 90px;
    height: 90px;
    display: flex;
    margin-left: 10px;
    /* border-right: 1px solid black; */
  }
`;
const DetailImage = styled.img`
  width: 130px;
  height: 140px;
  background-color: white;
  border-radius: 10px;
  object-fit: fill;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (max-width: 425px) {
    width: 80px;
    height: 90px;
  }
`;
const Qty = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-left: 20px;
`;
const Quantity = styled.div`
  width: 150px;
  height: 40px;
  /* background-color: lightcoral; */
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 700;

  @media screen and (max-width: 425px) {
    width: 90px;
    height: 40px;
    font-size: 20px;
  }
`;
const Details = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: red; */
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 425px) {
    width: 400px;
    height: 100px;
    align-items: center;
  }
`;
const CheckOut = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  font-weight: 600;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-bottom: 4px solid #644ff6;

  @media screen and (max-width: 425px) {
    font-weight: 500;
    font-size: 30px;
  }
`;
const First = styled.div`
  width: 100%;
  padding-bottom: 10px;
  background-color: #644ff6;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const ICon = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #644ff6;
  font-size: 60px;
  margin-top: 30px;
  margin-left: 32px;
`;
const MyAcct = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 10px;
`;
const NAme = styled.div`
  margin-left: 20px;
  font-size: 22px;
  color: white;
  font-weight: 500;
`;
const Wrapper = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (max-width: 425px) {
    width: 400px;
  }
`;
const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    width: 425px;
  }
`;
