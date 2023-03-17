import React from "react";
import styled from "styled-components";
import Imag from "../../Components/Assets/Danone - Water.png"
import bg from "../../Components/Assets/dde.png"

const DetailPage = () => {
  return (
    <Container>
      <Wrapper>
        {/* ----------- Detail Image ------------ */}
        <ProductImage>
          <Pics src={Imag} />
        </ProductImage>
        {/* ----------- Details ------------- */}
        <ProductDetails>
          <WaterName>Evian Water</WaterName>
          <Price>
            <Amt>Price(NGN):</Amt>
            200.00
          </Price>
          <Note>A amazing water, good for the health</Note>
          <Quantity>
            <Qty>Quantity:</Qty>
            <input placeholder="enter your quantity" type="text" />
          </Quantity>
          <QuantityPrice>
            Total Price(NGN):
            <QtyAmount>4500.00</QtyAmount>
          </QuantityPrice>
          <AddToCart>Add to Cart</AddToCart>
          <ProDuctNumber></ProDuctNumber>
          <PayMethod></PayMethod>
          <Exit>Back</Exit>
        </ProductDetails>
      </Wrapper>
      <Down></Down>
    </Container>
  );
};

export default DetailPage;

const Down = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: red; */
  background-image: url(${bg});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 768px) {
    height: 200px;
  }

  @media screen and (max-width: 425px) {
    height: 100px;
    margin-top: 20px;
  }
`;
const QuantityPrice = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: pink; */
  margin-top: 20px;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  margin-right: 40px;
  /* color: #644ff6; */
  color: black;
`;
const QtyAmount = styled.div`
  margin-left: 60px;
  color: red;
`;
const Exit = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #644ff6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-top: 30px;

  :hover {
    cursor: pointer;
  }
`;
const WaterName = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: burlywood; */
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 10px;

  @media screen and (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Amt = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-right: 80px;
  /* color: #644ff6; */
  color: black;
`;
const Price = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: blue; */
  border-bottom: 2px solid black;
  color: #0fde0f;
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-top: 20px;
`;
const Note = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
  font-size: 18px;
  border-bottom: 2px solid black;
  margin-top: 20px;
`;
const Qty = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-right: 40px;
  /* color: #644ff6; */
  color: black;
`;
const One = styled.div`
  display: flex;
  width: 150px;
  height: 40px;
  background-color: coral;
`;
const Quantity = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-bottom: 2px solid black;
  padding-bottom: 8px;

  input {
    width: 200px;
    height: 30px;
    /* background-color: aqua; */
    outline: none;
    border-radius: 5px;
    border: 2px solid black;
    padding-left: 7px;
    font-size: 16px;
    font-weight: 600;
  }
`;
const Add = styled.div`
  width: 40px;
  height: 40px;
  background-color: #644ff6;
  color: white;
  display: flex;
  font-size: 30px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border: 2px solid black;

  :hover {
    cursor: pointer;
  }
`;
const Value = styled.div`
  width: 70px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 600;
`;
const Subtract = styled.div`
  width: 40px;
  height: 40px;
  background-color: #644ff6;
  color: white;
  display: flex;
  font-size: 30px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border: 2px solid black;

  :hover {
    cursor: pointer;
  }
`;
const AddToCart = styled.button`
  width: 250px;
  height: 50px;
  outline: none;
  border: none;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #644ff6;
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;

  :hover {
    cursor: pointer;
  }
`;
const ProDuctNumber = styled.div``;
const PayMethod = styled.div``;
const ProductImage = styled.div`
  width: 570px;
  height: 700px;
  /* background-color: black; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 400px;
  }
  @media screen and (max-width: 425px) {
    width: 350px;
    height: 400px;
    display: flex;
  }
`;
const Pics = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const ProductDetails = styled.div`
  width: 500px;
  height: 100%;
  /* background-color: orange; */
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 380px;
    height: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 380px;
    height: 600px;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30px;
  }
`;
const Wrapper = styled.div`
  width: 70%;
  height: 700px;
  /* background-color: blueviolet; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 700px;
    height: 500px;
    justify-content: space-between;
    display: flex;
  }
  @media screen and (max-width: 425px) {
    width: 420px;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;
const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  flex-direction: column;
  background-color: #fafafa;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 768px;
    height: auto;
    display: flex;
  }

  @media screen and (max-width: 425px) {
    width: 425px;
    height: auto;
  }
`;
