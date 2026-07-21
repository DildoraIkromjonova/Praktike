import styled from "styled-components";
import SearchIcon from "../../assets/icons/Search.svg?react"
import Vector from "../../assets/icons/Vector.svg?react"
import Savat from "../../assets/icons/savat.svg?react"
import Love from "../../assets/icons/love.svg?react"
import Twitter from "../../assets/icons/Twitter.svg?react";
import Fasebook from "../../assets/icons/fasebook.svg?react"
import wectrr from "../../assets/icons/wectrr.svg?react"
import Parent from "../../assets/icons/Parent.svg?react"

const Icons = styled.div``
Icons.SearchIcon = styled(SearchIcon)``
Icons.Vector = styled(Vector)``
Icons.Savat = styled(Savat)``
Icons.Love = styled(Love)``
Icons.Twitter = styled(Twitter)``
Icons.Fasebook = styled(Fasebook)``
Icons.wectrr = styled(wectrr)``
Icons.Parent= styled(Parent)``


const ShoppingCardWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  height:1478px;
`
const Container = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`
const InputWrapper = styled.div`
  width:372px;
  height:56px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f5f5f5;
  border-radius: 8px;
  padding:  16px;
`
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const Item = styled.li``
const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 15px;
  &:hover {
    color: #888;
  }
`
const Breadcrumbs = styled.div`
width:100%;
height:104px;
padding:40px 160px;
gap:16px;
`
const Title = styled.div`
display:flex;
align-items:center;
justify-content:start;
gap:20px;
`

const ShoppingCardd = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 880px;
  padding: 112px 160px; 
  box-sizing: border-box;
  margin: 0 auto; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  min-height: 656px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  box-sizing: border-box;
`
const LeftSide = styled.div`
  width: 536px;
  height: 556px; 
  min-height: 556px; 
  box-sizing: border-box;
  margin-bottom:80px;
`

const Sumarry = styled.div`
  width: 536px;
  min-height: 656px; 
  border-radius: 10px;
  box-sizing: border-box;
  border:1px solid #EBEBEB;
`
const ShoppingCartSection = styled.div`
  flex: 1.3; 
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #EAEAEA;
  box-sizing: border-box;
`;

const CartTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
`;

const CartItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #EAEAEA;
  &:last-of-type {
    border-bottom: none;
  }
`;

const ProductInfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

const ProductMainImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const ProductTextDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 220px;
`;

const ProductMainTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  line-height: 20px;
  margin: 0;
`;

const ProductSKU = styled.span`
  font-size: 12px;
  color: #717171;
`;

const QuantityControlBlock = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #EAEAEA;
  border-radius: 5px;
  padding: 4px 8px;
  gap: 12px;
  background-color: #FFFFFF;
`;

const QuantityBtn = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #A0A0A0;
  cursor: pointer;
  padding: 0 4px;
  
  &:hover {
    color: #000000;
  }
`;

const QuantityValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`;

const ProductPriceText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  width: 80px;
  text-align: right;
`;

const DeleteItemBtn = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #A0A0A0;
  cursor: pointer;
  margin-left: 16px;
  
  &:hover {
    color: #FF0000;
  }
`;

const OrderSummarySection = styled.div`
  width: 440px;
  border: 1px solid #EAEAEA;
  border-radius: 12px;
  padding: 40px 24px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
`;
const Sumarywraper = styled.div`
width:408px;
height:488px;
margin-left:45px;
margin-top:60px;
margin-bottom:20px;
`

const SummaryTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
 margin-top:30px;
 margin-left:35px;

  
`;

const InputLabelText = styled.label`
  font-size: 14px;
  color: #717171;
  display: block;
  margin-bottom: 8px;
  margin-top: 16px;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

const CodeInputField = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  padding: 0 16px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: #F6F6F6;
  color: #000000;
  
  &::placeholder {
    color: #A0A0A0;
  }
  
  &:focus {
    outline: none;
    border-color: #000000;
  }
`;


const BonusCardRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const BonusApplyBtn = styled.button`
  height: 48px;
  background: none;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;


const PriceCalculationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const CalcRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalcLabel = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: 400;
`;

const CalcValue = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`;

const TotalPriceLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;

const TotalPriceValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const CheckoutSubmitBtn = styled.button`
  width: 100%;
  height: 56px;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: auto;
  
  &:hover {
    background-color: #333333;
  }
`;
const Footer = styled.div`
height:535px;
background-color:black;
padding:104px 160px;
gap:24px;
`
const FooterContainer = styled.div`
width:1120px;
height:445px;
display:flex;
max-width: 1280px; 
flex-direction:row;
justify-content:space-between;
align-items:flex-start;
`

const FooterColumn = styled.div`
display:flex;
flex-direction:column;
max-width:400px;
width: 40%; 
gap:10px;
`


const FooterLogo = styled.h2`
font-size:24px;
line-height:140%;
color:#FFFFFF;
`


const FooterAbout = styled.p`
color:#CFCFCF;
font-size:14px;
line-height:171%;
  margin: 0;
`
const ColumnTitle = styled.h2`
color:#FFFFFF;
font-size:16px;
line-height:14px;
`
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  li a{
     font-size: 14px;
    color: #909090;
    text-decoration: none;
    transition: color 0.2s ease;
  }
`

const FooterIcons = styled.div`
display:flex;
width:173px;
height:16px;;
 justify-content:space-between;
 gap:20px;
 margin-top:180px;
`








export {ShoppingCardWrapper,ProductInfoBlock, Container, InputWrapper, IconsWrapper, List, Item, Link, Breadcrumbs, Title, Icons, ShoppingCardd, Content, LeftSide, Sumarry, ShoppingCartSection, CartTitle, CartItemRow, ProductMainImg,ProductTextDetails, ProductMainTitle, ProductSKU,QuantityControlBlock, QuantityBtn, QuantityValue, ProductPriceText, DeleteItemBtn,   OrderSummarySection,
  SummaryTitle,
  InputLabelText,
  CodeInputField,
  BonusCardRow,
  BonusApplyBtn,
  PriceCalculationBlock,
  CalcRow,
  CalcLabel,
  CalcValue,
  TotalPriceLabel,
  TotalPriceValue,
  CheckoutSubmitBtn, Sumarywraper, Footer, FooterContainer, FooterColumn, FooterLogo,FooterAbout, ColumnTitle, FooterList,FooterIcons}