import styled from "styled-components";
import SearchIcon from "../../assets/icons/Search.svg?react"
import Vector from "../../assets/icons/Vector.svg?react"
import Savat from "../../assets/icons/Savat.svg?react"
import Love from "../../assets/icons/Love.svg?react"
import Payment from "../../assets/icons/Payment.svg?react"
import Twitter from "../../assets/icons/Twitter.svg?react";
import Fasebook from "../../assets/icons/fasebook.svg?react"
import wectrr from "../../assets/icons/wectrr.svg?react"
import Parent from "../../assets/icons/Parent.svg?react"

const Icons = styled.div``
Icons.SearchIcon = styled(SearchIcon)``
Icons.Vector = styled(Vector)``
Icons.Savat = styled(Savat)``
Icons.Love = styled(Love)``
Icons.Payment = styled(Payment)``
Icons.Twitter = styled(Twitter)``
Icons.Fasebook = styled(Fasebook)``
Icons.wectrr = styled(wectrr)``
Icons.Parent= styled(Parent)``

const StepWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  height:1576px;
`

const Container = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  max-width: 1440px;
  width: 100%;
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

const Steps = styled.div`
  height: 184px;
  display: flex;
  justify-content: start; 
  align-items: center; 
  gap: 120px; 
`;

const Step33 = styled.div`
  width: 160px;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 12px;   
    margin-left:70px;
`;

const StepIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #000000;
  border-radius: 50%;     
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;        
`;

const StepText = styled.div`
  display: flex;
  flex-direction: column;   
  font-family: sans-serif;
  span {
    font-size: 12px;
    color: #000000;
  }
  strong {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
  }
`;
const Content = styled.div`
height:800px;
`

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
`;

const SummarySection = styled.div`
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #000;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  background-color:#F6F6F6;
  border-radius:13px;
  padding:16px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
 
`;

const ImagePlaceholder = styled.div`
  width: 48px;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #aaa;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }
`;

const ProductPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;

const InfoBlock = styled.div`
  margin-bottom: 20px;
  h4 {
    font-size: 12px;
    color: #8c8c8c;
    margin-bottom: 4px;
    text-transform: uppercase;
  }
  p {
    font-size: 14px;
    color: #000;
    margin: 0;
  }
`;

const PriceCalculation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #e0e0e0;
  padding-top: 16px;
`;

const CalcRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #4a4a4a;
  
  &.total {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    border-top: 1px dashed #e0e0e0;
    padding-top: 12px;
  }
`;

const PaymentSection = styled.div`
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
`;

const PaymentTabs = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
  padding-bottom: 8px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.active ? '#000' : '#8c8c8c'};
  border-bottom: ${props => props.active ? '2px solid #000' : 'none'};
  padding-bottom: 8px;
  cursor: pointer;
`;

const CreditCardView = styled.div`
margin-bottom:30px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const CardNumber = styled.div`
  font-size: 18px;
  letter-spacing: 2px;

`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #8c8c8c;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  outline:none;
  &::placeholder {
    color: #b3b3b3;
  }
`;

const RowInputs = styled.div`
  display: flex;
  gap: 16px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: black;
  margin-bottom: 24px;
  cursor: pointer;
  input {
    cursor: pointer;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const Button = styled.button`
  flex: 1;
  padding: 14px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.back {
    background-color: #fff;
    border: 1px solid black;
    color: black;
  }
  
  &.pay {
    background-color: #000;
    border:1px solid black;
    color: #fff;
  }
`;
const Footer = styled.div`
height:504px;
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


export {StepWrapper, Container,InputWrapper, IconsWrapper,List, Item,Link,Breadcrumbs,Title,Icons, Steps, Step33, StepIcon,StepText, Content, Container2,SummarySection,SectionTitle,ProductList,ProductInfo,ProductItem,ImagePlaceholder,ProductDetails,ProductPrice,PriceCalculation,InfoBlock,CalcRow, PaymentSection,PaymentTabs,Tab,CreditCardView,CardBottom,CardNumber,CardTop,InputGroup,Input,RowInputs,CheckboxLabel,ActionButtons,Button, Footer,FooterColumn,FooterContainer,FooterLogo,FooterIcons,FooterAbout,ColumnTitle,FooterList}