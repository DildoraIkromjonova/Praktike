import styled from "styled-components"
import SearchIcon from "../../assets/icons/Search.svg?react"
import Vector from "../../assets/icons/Vector.svg?react"
import Savat from "../../assets/icons/Savat.svg?react"
import Love from "../../assets/icons/Love.svg?react"
import Right from "../../assets/icons/Right.svg?react"
import Batarey2 from "../../assets/icons/batarey2.svg?react"
import CPU from "../../assets/icons/CPU.svg?react"
import Cameras3 from "../../assets/icons/cameras3.svg?react"
import Cameras2 from "../../assets/icons/cameras2.svg?react"
import Camera from "../../assets/icons/cameras.svg?react"
import Batarey from "../../assets/icons/batarey.svg?react"
import Shop from "../../assets/icons/shop.svg?react"
import Delivery from "../../assets/icons/delivery.svg?react"
import Verify from "../../assets/icons/verify.svg?react"
import Favorite from "../../assets/icons/Favorite.svg?react"
import Twitter from "../../assets/icons/Twitter.svg?react"
import Fasebook from "../../assets/icons/fasebook.svg?react"
import wectrr from "../../assets/icons/wectrr.svg?react"
import Parent from "../../assets/icons/Parent.svg?react"
const Icons = styled.div``
Icons.SearchIcon = styled(SearchIcon)``
Icons.Vector = styled(Vector)``
Icons.Savat = styled(Savat)``
Icons.Love = styled(Love)``
Icons.Right = styled(Right)``
Icons.Batarey2 = styled(Batarey2)``
Icons.CPU = styled(CPU)``
Icons.Cameras3 = styled(Cameras3)``
Icons.Cameras2 = styled(Cameras2)``
Icons.Camera = styled(Camera)``
Icons.Batarey = styled(Batarey)``
Icons.Shop = styled(Shop)``
Icons.Delivery = styled(Delivery)``
Icons.Verify = styled(Verify)``
Icons.Favorite = styled(Favorite)``
Icons.Twitter = styled(Twitter)``
Icons.Fasebook = styled(Fasebook)``
Icons.wectrr = styled(wectrr)``
Icons.Parent = styled(Parent)``
const Productsdetalist = styled.div`
  max-width: 1240px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  height:2165px;
`
const Container = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  max-width: 1240px;
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
const MainInfo = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px 80px;
  display: flex;
  gap: 48px;
  align-items: flex-start;
  box-sizing: border-box;
`;

const Images = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  min-width: 0;
`;

const ProductImage = styled.div`
  width: 80px;
  height:444px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  margin-top:120px;
`;

const Image2 = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  width: 536px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: auto;
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: auto;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: auto;
`;

const Infocolors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: auto;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;

const FrameColor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: auto;
  padding-right: 0;
`;

const Tabsmemory = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

const Tabs = styled.div`
  min-width: 120px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailsCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  box-sizing: border-box;
`;

const DetailItem = styled.div`
  width: 100%;
  height: 84px;
  background: #f4f4f4;
  border-radius: 7px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
`;

const DetailText = styled.p`
  width: 100%;
  height: auto;
  color: #6c6c6c;
  line-height: 1.5;
`;
const DetailValue = styled.span`
  font-size: 14px;
  color: #000;
  font-weight: 500;
  line-height: 20px;
`;
const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const Button1 = styled.button`
  flex: 1;
  height: 56px;
  border-radius: 6px;
  border: 1px solid #000;
  background: #fff;
  cursor: pointer;
`;

const Button2 = styled.button`
  flex: 1;
  height: 56px;
  border-radius: 6px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

const ServiceWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
`;

const ServiceCard = styled.div`
  min-height: 64px;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
`;
const DetailTitle = styled.span`
  font-size: 14px;
  color: #a0a0a0;
  line-height: 16px;
`;
const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.span`
  font-size: 14px;
  color: #717171;
  line-height: 16px;
`;

const ServiceValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  line-height: 20px;
`;


const Discount = styled.div`
 height:656px; 
  margin: 0 auto;    
  background-color: #FFFFFF;
  padding: 80px 160px; 
  box-sizing: border-box;
`
const DWrap = styled.div`
 width: 248px;
  height: 32px;
  display: flex; 
  justify-content: center;
  align-items: center; 
  margin-right: 200px;
`
const DiscountTile = styled.h1`
  font-size: 24px;
  font-weight: 500;    
  line-height: 32px;
  color:#000000;    
  margin: 0;           
  letter-spacing: -0.5px;

`


const DiscountImG = styled.img`
display:flex;
align-items:center;
justify-content:center;
 margin: 35px auto 15px ;
`
const Roww = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`
const FavoriteIconWrapper = styled.div`
  position: absolute;
  top: 16px;    
  right: 16px;  
  cursor: pointer;
  z-index: 10;  
`
const DiscountCard = styled.div`
  position: relative;
  width: 268px;
  height: 432px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center; 
  padding: 24px 16px;
  border-radius: 9px;
  background-color: #f6f6f6;
  box-sizing: border-box;
`
const DiscountTiTle = styled.h3`
  text-align: center;
  margin: 0;
  font-size: 16px; 
  line-height: 22px;
  min-height: 66px; 
  display: flex;
  align-items: center;
  justify-content: center;
`

const DiscountBtn = styled.button`
  background-color: black;
  width: 188px;
  height: 48px;
  border-radius: 8px;
  padding: 12px 16px; 
  margin: 0 auto; 
  color: white;
  border: none;
  cursor: pointer; 
  &:hover {
    background-color: #333;
  }
`

const Footer = styled.div`
height:504px;
background-color:black;
padding:104px 160px;
gap:24px;
`
const FooterContainer = styled.div`
width:1120px;
height:250px;
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
 margin:10px 10px;
 justify-content:space-between;
 gap:20px;

`

export {
  Productsdetalist,
  Container,
  FooterLogo,
  FooterAbout,
  ColumnTitle,
  InputWrapper,
  IconsWrapper,
  Footer,
  List,
  Item,
  FooterIcons,
  FooterList,
  FavoriteIconWrapper,
  Link,
  DWrap,
  FooterColumn,
  DiscountTile,
  FooterContainer,
  Breadcrumbs,
  Title,
  Icons,
  MainInfo,
  Images,
  ProductImage,
  Image2,
  Info,
  Roww,
  Content,
  DiscountBtn,
  TitleInfo,
  Price,
  DiscountTiTle,
  Infocolors,
  Colors,
  FrameColor,
  Tabsmemory,
  Tabs,
  DetailsCard,
  DetailItem,
  DetailInfo,
  DiscountImG,
  DetailTitle,
  DiscountCard,
  DetailValue,
  DetailText,
  Buttons,
  Button1,
  Button2,
  ServiceWrapper,
  ServiceCard,
  ServiceInfo,
  ServiceTitle,
  ServiceValue, Discount
};