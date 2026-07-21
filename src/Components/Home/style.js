import styled from "styled-components";
import SearchIcon from "../../assets/icons/Search.svg?react"
import Vector from "../../assets/icons/Vector.svg?react"
import Savat from "../../assets/icons/savat.svg?react"
import Love from "../../assets/icons/love.svg?react"
import Arrow from "../../assets/icons/Arrow.svg?react"
import arowRight from "../../assets/icons/arowRight.svg?react"
import Favorite from "../../assets/icons/Favorite.svg?react"
import Like from "../../assets/icons/Like.svg?react"
import Twitter from "../../assets/icons/Twitter.svg?react"
import Fasebook from "../../assets/icons/fasebook.svg?react"
import wectrr from "../../assets/icons/wectrr.svg?react"
import Parent from "../../assets/icons/Parent.svg?react"
import { Link as RouterLink } from "react-router-dom";

const Icons = styled.div`
`
Icons.SearchIcon = styled(SearchIcon)``
Icons.Vector = styled(Vector)``
Icons.Savat = styled(Savat)``
Icons.Love = styled(Love)``
Icons.Arrow = styled(Arrow)``
Icons.arowRight = styled(arowRight)``
Icons.Favorite = styled(Favorite)`
  position: absolute;
  top: 12px;
  right: 12px;
`
Icons.Like = styled(Like)`
  position: absolute;
  top: 12px;
  right: 12px;
`
Icons.Twitter = styled(Twitter)``
Icons.Fasebook = styled(Fasebook)``
Icons.wectrr = styled(wectrr)``
Icons.Parent = styled(Parent)``
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
`;
const Container = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
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
const Item = styled.li`

`
const Link = styled(RouterLink)`
  text-decoration: none;
  color: #000;
  font-size: 15px;

  &:hover {
    color: #888;
  }
`;
const Container2 = styled.div`
width:100%;
height:632px;
background:#211C24;
display:flex;
align-items:center;
justify-content:flex-end;
`
const IMG = styled.img`
width:406px;
height:632px;
margin-right:120px;
`
const Content = styled.div`
width:714px;
height:256px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 80px;
`
const Title = styled.p`
height:32px;
opacity:40%;
color:#FFFFFF;
font-size:25px;
`
const Tag = styled.h1`
height:72px;
color:#FFFFFF;
font-weight:100;
font-size:90px;
line-height:70px;
letter-spacing:-1%;
font-style:Thin;
`
const Desc = styled.p`
height:24px;
font-size:18px;
color:#909090;
font-style:Medium;
`
const ContentButton = styled.button`
 width: 120px;
  height: 40px;
border-radius:6px;
border:1px solid #FFFFFF;
background:transparent;
gap:8px;
`
const Container3 = styled.div`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;
const LeftSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
`;

const PS5Banner = styled.div`
  background:#FFFFFF;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`;

const BottomCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

const AirpodsCard = styled.div`
  background: #ededed;
  display: flex;
  align-items:center;
   max-width: 500px;
  height: 100%;
   overflow: hidden;
   gap:40px;
`;
const VisionCard = styled.div`
  background: #353535;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap:40px;
`;

const BannerImG = styled.img`
 `
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
 `
const Bannertitle = styled.h2`
   font-weight: 400;
  font-size: 42px;
  line-height: 1.2;
 color:#000000;
 `
const BannerDesc = styled.p`
 font-size: 14px;
 line-height: 24px;
 color: #909090;
 max-width: 260px;
 margin: 0;
 text-wrap: pretty;
`;
const AirpodImg = styled.img`
  width: 104px;
  height: auto;
`
const AirpodWrapper = styled.div`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center;
 `
const AirpodTitle = styled.h2`
   font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
  color: #000000;
 `
const AirpodDesc = styled.p`
 color:#909090;
 font-weight:500;
 font-size:14px;
 line-height:20px;
  max-width: 150px;
 `
const VisionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center;
  `
const VisionImg = styled.img`
  width: 136px;
  height: auto;
`
const VisionTitle = styled.h2`
 font-weight:200;
 font-size:29px;
 line-height: 1.2;
 color:#FFFFFF;
`
const VisionDesc = styled.p`
color:#909090;
font-weight:500;
font-size:14px;
line-height:1.5;
 margin: 0;
 text-wrap: pretty;
`
const Makbook = styled.div`
  background:#EDEDED;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  overflow: hidden; 
`;
const MakbookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center;
  gap:16px;
`
const MakbookTitle = styled.h2`
font-weight:100;
font-size:64px;
line-height:56px;
color:#000000;
font-style:Thin;
`
const MakbookDesc = styled.p`
font-weight:500;
font-size:14px;
line-height:24px;
color:#909090;
 max-width: 260px;
 margin: 0;
 text-wrap: pretty;
`
const MakbookImg = styled.img`
`
const MakbookButton = styled.button`
 width: 120px;
  height: 40px;
border-radius:6px;
border:1px solid #000000;
background:transparent;
gap:8px;
color:#000000;
`
const BrowseCategory = styled.div`
  padding: 80px 160px;
  background-color: #FAFAFA;
`;

const TagCategory = styled.div`
  width: 1120px;
  margin: 0 auto 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrows = styled.div`
  display: flex;
  gap: 16px;
`;

const TitleH1 = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Categoryes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
`;

const CategoryCard = styled.div`
  width: 160px;
  height: 128px;
  border-radius: 15px;
  padding: 24px 12px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EDEDED;
`;

const Products = styled.div`
padding:56px 160px;
 height:1056px;
  background-color:#FFFFFF;
`
const Tags = styled.div`
width:1120px;
height:32px;
gap:32px;
  display: flex;
  justify-content: start;
  align-items: center;
`

const ProductsGrid = styled.div`
width:1120px;
height:880px;
margin-top:20px;
`
 const Row1 = styled.div`
  min-height: 432px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;

`;
const IconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  cursor: pointer;
`
const Row2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`

const ProductCard = styled.div`
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

const ProductTiTle = styled.h3`
  text-align: center;
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  min-height: 66px; 
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProductBtn = styled.button`
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



 
const ProductsImG = styled.img`
display:flex;
align-items:center;
justify-content:center;
 margin: 35px auto 15px ;
`


const BigBanners = styled.div`
height:640px;
 display: flex;
  justify-content: center;
  gap: 20px;
`
const Bigbanner = styled.div`
  width: 360px;
  height: 640px;
  padding: 32px 56px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigbannerImg = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 24px;
`;

const PopularProducts = styled.h2`
  margin: 0; 
`;

 const Popular = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  gap: 12px;
`;

 const Lorem = styled.p` 
  font-size: 14px;
  color: #757575;
  margin: 0; 
  max-width: 240px; 
  line-height: 1.6;
  letter-spacing: 0.3px; 
`;


const BigButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background: transparent;
  color: #000;
  margin-top: 4px;
`;
 

const Discount = styled.div`
 height:656px; 
  margin: 0 auto;    
  background-color: #FFFFFF;
  padding: 56px 0px 20px 0px; 
  box-sizing: border-box;
`
const DWrap = styled.div`
 width: 248px;
  height: 32px;
  display: flex; 
  justify-content: flex-start;
  align-items: center; 
  margin-left: 180px;
`
const DiscountTile = styled.h1`
  font-size: 24px;
  font-weight: 500;    
  line-height: 32px;
  color:#000000;    
  margin: 0;           
  letter-spacing: -0.5px;
`

const Roww = styled.div`
  min-height: 432px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-right:50px 20px;
  padding: 20px;
`
const DiscountCard = styled.div`
 position: relative;
  width: 268px;
  height: 432px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 16px;
  border-radius: 9px;
  background-color: #f6f6f6;
  box-sizing: border-box;
`
const DiscountImG = styled.img`
display:flex;
align-items:center;
justify-content:center;
 margin: 35px auto 15px ;
`

const DiscountTiTle = styled.h3`
 text-align:center;
`
const DiscountBtn = styled.button`
  background-color: black;
  width: 188px;
  height: 48px;
  border-radius: 8px;
  padding: 12px 64px;
  margin: 20px auto 0;
  color: white;
  border: none;
  display: block;
`


const Banner = styled.div`
  height: 448px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const Bannerfoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerWrapper = styled.div`
  position: absolute;
  bottom: 130px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 560px;
  z-index: 2;
`;

const BiGSummer = styled.h1`
  font-size: 56px;
  font-weight: 100;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;

  span {
    font-weight: 600;
  }
`;

const DescBaner = styled.p`
  font-size: 14px;
  color: #909090;
  margin: 0;
  margin-bottom: 8px;
`;

const BannerBtn = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
`;

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
  Wrapper, Container, InputWrapper, List, Item, Link,
  Icons, IconsWrapper, Container2, IMG, Content, Title, Tag, Desc, ContentButton, Container3, LeftSection, PS5Banner, BottomCards, AirpodsCard, VisionCard, Makbook, BannerImG, Bannertitle, TitleWrapper, BannerDesc, AirpodImg, AirpodTitle, AirpodDesc, AirpodWrapper, VisionWrapper, VisionImg, VisionTitle, VisionDesc, MakbookWrapper, MakbookTitle, MakbookDesc, MakbookImg, MakbookButton, BrowseCategory, TagCategory, Arrows, TitleH1, Categoryes, CategoryCard, Products, Tags, ProductsGrid, Row1, Row2, ProductCard, ProductsImG, ProductTiTle, ProductBtn, BigBanners, Bigbanner, BigbannerImg, PopularProducts, Lorem, BigButton, Popular, 
  Discount, DiscountTile, DWrap, Roww, DiscountCard,DiscountTiTle,DiscountBtn, DiscountImG , Banner, Bannerfoto, BiGSummer, BannerWrapper, DescBaner, BannerBtn, Footer, FooterContainer, FooterColumn, FooterLogo, FooterAbout, ColumnTitle, FooterList, FooterIcons, IconWrapper
};
