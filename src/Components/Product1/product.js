import styled from "styled-components";
import SearchIcon from "../../assets/icons/Search.svg?react"
import Vector from "../../assets/icons/Vector.svg?react"
import Savat from "../../assets/icons/Savat.svg?react"
import Love from "../../assets/icons/Love.svg?react"
import Right from "../../assets/icons/Right.svg?react"
import Control from "../../assets/icons/control.svg?react"
import Errow from "../../assets/icons/errow.svg?react"
import Strlka from "../../assets/icons/strkaa.svg?react"
import Favorite from "../../assets/icons/Favorite.svg?react"
import Arrow from "../../assets/icons/Arrow.svg?react"
import arowRight from "../../assets/icons/arowRight.svg?react"
import Twitter from "../../assets/icons/Twitter.svg?react"
import Fasebook from "../../assets/icons/fasebook.svg?react"
import wectrr from "../../assets/icons/wectrr.svg?react"
import Parent from "../../assets/icons/Parent.svg?react"


const Icons = styled.div`
`
Icons.SearchIcon = styled(SearchIcon)``
Icons.Vector = styled(Vector)``
Icons.Savat = styled(Savat)``
Icons.Love = styled(Love)``
Icons.Right = styled(Right)``
Icons.Control = styled(Control)``
Icons.Errow = styled(Errow)``
Icons.Strlka = styled(Strlka)``
Icons.Favorite = styled(Favorite)`
  position: absolute;
  top: 12px;
  right: 12px;
`
Icons.Arrow = styled(Arrow)``
Icons.arowRight = styled(arowRight)``
Icons.Twitter = styled(Twitter)``
Icons.Fasebook = styled(Fasebook)``
Icons.wectrr = styled(wectrr)``
Icons.Parent = styled(Parent)``



const ProductsPage = styled.div`
  max-width: 1240px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
 min-height: 2225px;
`

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

const Content = styled.div`
  width: 100%;
  padding: 24px 0 56px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Frame = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  box-sizing: border-box;
`;

const Filters = styled.div`
  width: 256px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Frame1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Frame2 = styled.div`
  width: 100%;
  height: 48px;
  padding: 12px 0px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  span {
    font-size: 18px;
    font-weight: 600;
    color: #000000;
  }
`;

const SearchBrands = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  margin-top: 8px;
`;
const SearchInput = styled.input`
  width: 100%; 
  height: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  outline: none; 
  font-size: 14px;
  box-sizing: border-box;

  &::placeholder {
    color: #909090;
  }
`;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  cursor: pointer;

  .left-side {
    display: flex;
    align-items: center;
    gap: 8px; 
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #000000; 
    cursor: pointer;
  }

  .count {
    font-size: 13px;
    color: #B0B0B0; 
  }
`;
const ProductsFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const TopPart = styled.div`
height:40px;
min-width:200px;
gap:6px;
display:flex;
align-items:center;
justify-content:space-between;
`
const Dropdown = styled.div`
width:256px;
height:40px;
min-width:140px;
max-width:256px;
border-radius:8px;
border:0.5px solid #D4D4D4;
padding:8px 16px;
background-color:#FFFFFF;
display:flex;
align-items:center;
justify-content:space-between;
`
const Wrapper = styled.div`
  width: 831px;
  min-height: 1344px;
`;

const Row1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Row2 = styled(Row1)``;

const Row3 = styled(Row1)``;

const ProductCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 432px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px;
  background: #f6f6f6;
  border-radius: 9px;
  box-sizing: border-box;
`;

const ProductsImg = styled.img`
  display: block;
  margin: 35px auto 15px;
`;

const ProductTitle = styled.h3`
  text-align: center;
`;

const ProductBtn = styled.button`
  width: 188px;
  height: 48px;
  margin: auto auto 0;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Pagination = styled.div`
  display: flex;
  gap:12px;
  padding:4px 12px;
  justify-content:center;
`;

const PageButton = styled.button`
  width:32px;
  height: 32px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#000" : "#f5f5f5")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
`;

const ArrowButton = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
`;

const Dots = styled.span`
  font-size: 16px;
  color: #999;
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

export { ProductsPage, Container, InputWrapper, Icons, IconsWrapper, List, Item, Link, Breadcrumbs, Title, Content, Frame, Filters, Frame1, Frame2, SearchBrands, SearchInput, CheckboxLabel, ProductsFrame, TopPart , Dropdown,Wrapper, Row1, ProductCard, ProductsImg, ProductTitle, ProductBtn, Row2, Row3, Pagination, PageButton, ArrowButton, Dots, Footer, FooterContainer, FooterColumn, FooterLogo,FooterAbout, ColumnTitle, FooterList,FooterIcons};