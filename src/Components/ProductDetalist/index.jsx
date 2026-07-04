import { Breadcrumbs, Button1, Button2, Buttons, Colors, Container, Content, DetailInfo, DetailItem, DetailsCard, DetailText, DetailTitle, FrameColor, Icons, IconsWrapper, Image2, Images, Info, Infocolors, InputWrapper, Item, Link, List, MainInfo, Price, ProductImage, Productsdetalist, ServiceCard, ServiceInfo, ServiceTitle, ServiceValue, ServiceWrapper, Tabs, Tabsmemory, Title, TitleInfo , DetailValue, Discount, DWrap, DiscountTile, DiscountCard, DiscountImG, DiscountTiTle, DiscountBtn, Roww, FavoriteIconWrapper, Footer, FooterContainer, FooterColumn, FooterLogo, FooterAbout, ColumnTitle, FooterList, FooterIcons} from "./productdetal";
import Image57 from "../../assets/images/image 57.png"
import Image61 from "../../assets/images/image 61.png"
import Image62 from "../../assets/images/image 62.png"
import Image63 from "../../assets/images/image 63.png"
import ImagesIphone from "../../assets/images/ImagesIphone.png"
import Ellipse12 from "../../assets/images/Ellipse 12.png"
import Ellipse13 from "../../assets/images/Ellipse 13.png"
import Ellipse14 from "../../assets/images/Ellipse 14.png"
import Ellipse15 from "../../assets/images/Ellipse 15.png"
import Ellipse16 from "../../assets/images/Ellipse 16.png"
import Soat from "../../assets/images/soat.png"
import aypon from "../../assets/images/aypon.png"
import ofoon from "../../assets/images/ofponnn.png"
import Camera from "../../assets/images/camera.png"
import { useNavigate } from "react-router-dom";

const ProductDetalist = () => {
  const navigate = useNavigate()
  return (
    <Productsdetalist>
      <Container>
        <h1>cyber</h1>
        <InputWrapper>
          <Icons.SearchIcon />
          <input style={{ border: "none", outline: "none", background: "transparent", }} placeholder="Search" />
        </InputWrapper>
        <List>
          <Item>< Link href="#">Home</Link></Item>
          <Item><Link href="#">About</Link></Item>
          <Item><Link href="#">Contact Us</Link></Item>
          <Item><Link href="#">Blog</Link></Item>
        </List>
        <IconsWrapper>
          <Icons.Love />
          <Icons.Savat />
          <Icons.Vector />
        </IconsWrapper>
      </Container>
      <hr />
      <Breadcrumbs>
        <Title>
          <h4 style={{ color: "#A4A4A4" }}>Home</h4>
          <Icons.Right />
          <h4 style={{ color: "#A4A4A4" }}>Catalog</h4>
          <Icons.Right />
          <h4 style={{ color: "#A4A4A4" }}>Smartphones</h4>
          <Icons.Right />
          <h4 style={{ color: "#A4A4A4" }}>Apple</h4>
          <Icons.Right />
          <h4>iPhone 14 Pro Max</h4>
        </Title>
      </Breadcrumbs>
      <MainInfo>
        <Images>
          <ProductImage>
            <img src={Image57} alt="not found" style={{ width: "76.88px", height: "93px",}} />
            <img src={Image61} alt="not found" style={{ width: "46.31px", height: "93px",}} />
            <img src={Image62} alt="not found" style={{ width: "45.32px", height: "93px",  }} />
            <img src={Image63} alt="not found" style={{ width: "34.49px", height: "93px",  }} />
          </ProductImage>
          <Image2>
            <img src={ImagesIphone} alt="not found" />
          </Image2>
          <Info>
            <Content>
              <TitleInfo>
                <h1 style={{ fontSize: "40px", width: "536px", height: "40px",  }}>Apple iPhone 14 Pro Max</h1>
                <Price>
                  <h2 style={{ fontSize: "32px" }}>$1399 <span style={{ fontSize: "24px", color: "#A0A0A0", textDecoration: " line-through" }}>$1499</span></h2>
                </Price>
              </TitleInfo>
              <Infocolors>
                <Colors>
                  <h5>Select color :</h5>
                  <FrameColor>
                    <img src={Ellipse12} alt="not found" />
                    <img src={Ellipse13} alt="not found" />
                    <img src={Ellipse15} alt="not found" />
                    <img src={Ellipse16} alt="not found" />
                    <img src={Ellipse14} alt="not found" />
                  </FrameColor>
                </Colors>
                <Tabsmemory>
                  <Tabs><p style={{ color: "#D5D5D5", textAlign: "center" }}>128GB</p></Tabs>
                  <Tabs><p style={{ color: "#6F6F6F", textAlign: "center" }}>256GB</p></Tabs>
                  <Tabs><p style={{ color: "#6F6F6F", textAlign: "center" }}>512GB</p></Tabs>
                  <Tabs style={{ border: "1px solid #000000 " }}><p style={{ color: "#000000", textAlign: "center" }}>1TB</p></Tabs>
                </Tabsmemory>
                <DetailsCard>
                  <DetailItem>
                    <Icons.Batarey2 />
                    <DetailInfo>
                      <DetailTitle>Screen size</DetailTitle>
                      <DetailValue>6.7"</DetailValue>
                    </DetailInfo>
                  </DetailItem>
                  <DetailItem>
                    <Icons.CPU />
                    <DetailInfo>
                      <DetailTitle>CPU</DetailTitle>
                      <DetailValue>Apple A16 Bionic</DetailValue>
                    </DetailInfo>
                  </DetailItem>
                  <DetailItem>
                    <Icons.Cameras3 />
                    <DetailInfo>
                      <DetailTitle>Number of Cores</DetailTitle>
                      <DetailValue>6</DetailValue>
                    </DetailInfo>
                  </DetailItem>
                  <DetailItem>
                    <Icons.Cameras2 />
                    <DetailInfo>
                      <DetailTitle>Main camera</DetailTitle>
                      <DetailValue>48-12-12 MP</DetailValue>
                    </DetailInfo>
                  </DetailItem>
                  <DetailItem>
                    <Icons.Camera />
                    <DetailInfo>
                      <DetailTitle>Front-camera</DetailTitle>
                      <DetailValue>12 MP</DetailValue>
                    </DetailInfo>
                  </DetailItem>
                  <DetailItem>
                    <Icons.Batarey />
                    <DetailInfo>
                      <DetailTitle>Battery capacity</DetailTitle>
                      <DetailValue>4323 mAh</DetailValue>
                    </DetailInfo>
                  </DetailItem>
                </DetailsCard>
                <DetailText>
                  Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras <span style={{ color: "black", textDecoration: "underline" }}>more...</span>
                </DetailText>

              </Infocolors>
              <Buttons>
                <Button1><h5 style={{ fontSize: "14px", }}>Add to Wishlist</h5></Button1>
                <Button2  onClick={()=>navigate("/shoppingcard")}>
                  <h5 style={{ fontSize: "14px", color: "white" }}>Add to Card</h5>
                </Button2>
              </Buttons>
              <ServiceWrapper>
                <ServiceCard>
                  <Icons.Delivery/>
                  <ServiceInfo>
                    <ServiceTitle>Free Delivery</ServiceTitle>
                    <ServiceValue>1-2 day</ServiceValue>
                  </ServiceInfo>
                </ServiceCard>
                <ServiceCard>
                <Icons.Shop/>
                  <ServiceInfo>
                    <ServiceTitle>In Stock</ServiceTitle>
                    <ServiceValue>Today</ServiceValue>
                  </ServiceInfo>
                </ServiceCard>

                <ServiceCard>
                <Icons.Verify/>
                  <ServiceInfo>
                    <ServiceTitle>Guaranteed</ServiceTitle>
                    <ServiceValue>1 year</ServiceValue>
                  </ServiceInfo>
                </ServiceCard>
              </ServiceWrapper>
            </Content>

          </Info>
        </Images>
      </MainInfo>
      <Discount>
        <DWrap>
        <DiscountTile>Related Products</DiscountTile>
        </DWrap>
        <Roww>
  <DiscountCard>
  <FavoriteIconWrapper>
   <Icons.Favorite/>
   </FavoriteIconWrapper>
<DiscountImG src={aypon}/>
<DiscountTiTle>Apple iPhone 14 Pro 512GB Gold (MQ233) </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$1437</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
  <DiscountCard>
   <FavoriteIconWrapper>
   <Icons.Favorite/>
   </FavoriteIconWrapper>
<DiscountImG src={Soat}/>
<DiscountTiTle>AirPods Max Silver
Starlight Aluminium  </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$549</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
  <DiscountCard>
  <FavoriteIconWrapper>
   <Icons.Favorite/>
   </FavoriteIconWrapper>
<DiscountImG src={Camera}/>
<DiscountTiTle >Apple Watch Series 9 GPS 41mm Starlight Aluminium  </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$399</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
  <DiscountCard>
  <FavoriteIconWrapper>
   <Icons.Favorite/>
   </FavoriteIconWrapper>
<DiscountImG src={ofoon}/>
<DiscountTiTle>Apple iPhone 14 Pro 1TB Gold (MQ2V3) </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$1499</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
          </Roww>
       </Discount>
       <Footer>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo>cyber</FooterLogo>
            <FooterAbout>We are a residential interior design firm located in <br /> Portland. Our boutique-studio offers more than</FooterAbout>
          </FooterColumn>
          <FooterColumn>
            <ColumnTitle> Services </ColumnTitle>
    <FooterList>
    <li><a href="#">Bonus program</a></li>
    <li><a href="#">Gift cards</a></li>
    <li><a href="#">Credit and payment</a></li>
    <li><a href="#">Service contracts</a></li>
    <li><a href="#">Non-cash account</a></li>
    <li><a href="#">Payment</a></li>
    </FooterList>
          </FooterColumn>
          <FooterColumn>
          <ColumnTitle> Assistance to the buyer </ColumnTitle>
    <FooterList>
    <li><a href="#">Find an order</a></li>
    <li><a href="#">Terms of delivery</a></li>
    <li><a href="#">Exchange and return of goods</a></li>
    <li><a href="#">Guarantee</a></li>
    <li><a href="#">Frequently asked questions</a></li>
    <li><a href="#">Terms of use of the site</a></li>
    </FooterList>
          </FooterColumn>
        </FooterContainer>
        <FooterIcons>
            <Icons.Twitter/>
            <Icons.Fasebook/>
          <Icons.wectrr/>
          <Icons.Parent/>
          </FooterIcons>
       </Footer>
    </Productsdetalist>
  )
}

export default ProductDetalist;