import { AirpodDesc, AirpodImg, AirpodsCard, AirpodTitle, AirpodWrapper, Arrows, Banner, BannerBtn, BannerDesc, Bannerfoto, BannerImG, Bannertitle, BannerWrapper, Bigbanner, BigbannerImg, BigBanners, BigButton, BiGSummer, BottomCards, BrowseCategory, CategoryCard, Categoryes, ColumnTitle, Container, Container2, Container3, Content, ContentButton, Desc, DescBaner, Discount, DiscountBtn, DiscountCard, DiscountImG, DiscountTile, DiscountTiTle, DWrap, Footer, FooterAbout, FooterColumn, FooterContainer, FooterIcons, FooterList, FooterLogo, Icons, IconsWrapper, IconWrapper, IMG, InputWrapper, Item, LeftSection, Link, List, Lorem, Makbook, MakbookButton, MakbookDesc, MakbookImg, MakbookTitle, MakbookWrapper, Popular, PopularProducts, ProductBtn, ProductCard, Products, ProductsGrid, ProductsImG, ProductTiTle, PS5Banner, Row1, Row2, Roww, Tag, TagCategory, Tags, Title, TitleH1, TitleWrapper, VisionCard, VisionDesc, VisionImg, VisionTitle, VisionWrapper, Wrapper } from "./style";
import IphoneImg from "../../assets/images/iphone.png"
import Play from "../../assets/images/play.png"
import Hero from "../../assets/images/hero.png"
import Images from "../../assets/images/images.png"
import Mak from "../../assets/images/Makk.png"
import Phones from "../../assets/images/Phones.png"
import SmartWatches from "../../assets/images/SmartWatches.png"
import Headphones from "../../assets/images/Headphones.png"
import Cameras from "../../assets/images/Cameras.png"
import Computers from "../../assets/images/Computers.png"
import Gaming from "../../assets/images/Gaming.png"
import iphone from "../../assets/images/samsung.png"
import Apple from "../../assets/images/apple.png"
import Camera from "../../assets/images/camera.png"
import Soat from "../../assets/images/soat.png"
import Airpods from "../../assets/images/airpods.png"
import S1S1S1 from "../../assets/images/s1s1s1.png"
import Galaxy from "../../assets/images/galaxy.png"
import Bluts from "../../assets/images/bluts.png"
import Group  from "../../assets/images/Group 1.png"
import Foto from "../../assets/images/Foto.png"
import Rasm  from "../../assets/images/Rasm.png"
import kompyuter from "../../assets/images/kompyuter.png"
import ofoon from "../../assets/images/ofponnn.png"
import aypon from "../../assets/images/aypon.png"
import fon from "../../assets/images/fon.png"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
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
      <Container2>
        <Content>
          <Title> Pro.Beyond.</Title>
          <Tag>iPhone 14 <span style={{ fontWeight: "600", fontStyle: "Semi bold", fontSize: "90px", lineHeight: "70px", letterSpacing: "-1%" }}>Pro</span></Tag>
          <Desc>Created to change everything for the better. For everyone</Desc>
          <ContentButton style={{ color: "#FFFFFF", cursor:"pointer" }}  onClick={() => navigate("/product1")}>Shop Now</ContentButton>
        </Content>
        <IMG src={IphoneImg} alt="not found" />
      </Container2>
      <Container3>
        <LeftSection>
          <PS5Banner>
            <BannerImG src={Play} alt="not found" />
            <TitleWrapper>
              <Bannertitle>Playstation 5</Bannertitle>
              <BannerDesc>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</BannerDesc>
            </TitleWrapper>
          </PS5Banner>
          <BottomCards>
            <AirpodsCard>
              <AirpodImg src={Hero} alt="not found" />
              <AirpodWrapper>
                <AirpodTitle>Apple <br />
                  AirPods <br /> <span style={{ fontWeight: "900" }}>Max</span> </AirpodTitle>
                <AirpodDesc>Computational audio. Listen, it's powerful</AirpodDesc>
              </AirpodWrapper>
            </AirpodsCard>
            <VisionCard>
              <VisionImg src={Images} alt="not found" />
              <VisionWrapper>
                <VisionTitle>Apple <br />
                  Vision <span style={{ fontWeight: "900" }}>Pro</span></VisionTitle>
                <VisionDesc>An immersive way to experience entertainment</VisionDesc>
              </VisionWrapper>
            </VisionCard>
          </BottomCards>
        </LeftSection>
        <Makbook>
          <MakbookWrapper>
            <MakbookTitle>Macbook <br />
              <span style={{ fontWeight: "500", fontStyle: "Medium" }}>Air</span></MakbookTitle>
            <MakbookDesc>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</MakbookDesc>
            <MakbookButton>Shop Now</MakbookButton>
          </MakbookWrapper>
          <MakbookImg src={Mak} alt="not found " />
        </Makbook>
      </Container3>
      <BrowseCategory>
        <TagCategory style={{ justifyContent: "space-between" }}>
          <TitleH1>Browse By Category</TitleH1>
          <Arrows>
            <Icons.Arrow />
            <Icons.arowRight />
          </Arrows>
        </TagCategory>
        <Categoryes>
          <CategoryCard>
            <img src={Phones} alt="not found" />
            <p>Phones</p>
          </CategoryCard>
          <CategoryCard>
            <img src={SmartWatches} alt="not found" />
            <p>Smart Watches</p>
          </CategoryCard>
          <CategoryCard>
            <img src={Cameras} alt="not found" />
            <p>Cameras</p>
          </CategoryCard>
          <CategoryCard>
            <img src={Headphones} alt="not found" />
            <p>Headphones</p>
          </CategoryCard>
          <CategoryCard>
            <img src={Computers} alt="not found" />
            <p>Computers</p>
          </CategoryCard>
          <CategoryCard>
            <img src={Gaming} alt="not found" />
            <p>Gaming</p>
          </CategoryCard>
        </Categoryes>
      </BrowseCategory>
      <Products>
        <Tags>
          <p style={{ color: "#000000", fontSize:"18px", lineHeight:"32px" }}>New Arrival</p>
          <p style={{ color: "#8B8B8B",  fontSize:"18px", lineHeight:"32px" }}>Bestseller</p>
          <p style={{ color: "#8B8B8B",  fontSize:"18px", lineHeight:"32px" }}>Featured Products</p>
        </Tags>
        <ProductsGrid>
          <Row1>
  <ProductCard>
    <Icons.Favorite/>
<ProductsImG src={iphone}/>
<ProductTiTle>Apple iPhone 14 Pro Max <br />128GB Deep Purple </ProductTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$900</h4>
 <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>
  <ProductCard>
    <Icons.Favorite/>
<ProductsImG src={Apple}/>
<ProductTiTle>Blackmagic Pocket Cinema  <br /> Camera 6k</ProductTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$2535</h4>
 <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>
  <ProductCard>
    <Icons.Favorite/>
<ProductsImG src={Camera}/>
<ProductTiTle>Apple Watch Series 9 GPS 41mm Starlight Aluminium  </ProductTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$399</h4>
 <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>
  <ProductCard>
    <Icons.Favorite/>
<ProductsImG src={Soat}/>
<ProductTiTle>AirPods Max Silver
Starlight Aluminium  </ProductTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$549</h4>
 <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>
          </Row1>
          <Row2>
  <ProductCard>
    <IconWrapper>
      <Icons.Favorite/>
    </IconWrapper>
    <ProductsImG src={Airpods}/>
    <ProductTiTle>Samsung Galaxy Watch6 Classic 47mm Black</ProductTiTle>
    <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$369</h4>
    <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>
  <ProductCard>
    <IconWrapper>
      <Icons.Like/>
    </IconWrapper>
    <ProductsImG src={S1S1S1}/>
    <ProductTiTle>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</ProductTiTle>
    <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$1799</h4>
    <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>
  <ProductCard>
    <IconWrapper>
      <Icons.Favorite/>
    </IconWrapper>
    <ProductsImG src={Galaxy}/>
    <ProductTiTle>Galaxy Buds FE Graphite</ProductTiTle>
    <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$99.99</h4>
    <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>

  <ProductCard>
    <IconWrapper>
      <Icons.Favorite />
    </IconWrapper>
    <ProductsImG src={Bluts}/>
    <ProductTiTle>Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</ProductTiTle>
    <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$398</h4>
    <ProductBtn style={{color:"white"}}>Buy Now</ProductBtn>
  </ProductCard>
</Row2>

        </ProductsGrid>
      </Products>
       <BigBanners>
        <Bigbanner>
        <BigbannerImg src={Group}/>
<Popular>
<PopularProducts>
        Popular Products
        </PopularProducts>
          <Lorem>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Lorem>
          <BigButton style={{color:"black"}}>Show now</BigButton>
</Popular>
        </Bigbanner>
        <Bigbanner style={{background:"#F9F9F9"}}>
       <BigbannerImg  src= {Foto} />
<Popular>
<PopularProducts>Ipad Pro </PopularProducts>
          <Lorem>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Lorem>
          <BigButton style={{color:"black"}}>Show now</BigButton>
</Popular>
        </Bigbanner>
        <Bigbanner style={{background:"#EAEAEA"}} >
        <BigbannerImg src={Rasm}/>
<Popular>
<PopularProducts>
Samsung Galaxy 
        </PopularProducts>
          <Lorem>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Lorem>
          <BigButton style={{color:"black"}}>Show now</BigButton>
</Popular>
        </Bigbanner>
        <Bigbanner style={{background:"#2C2C2C"}}>
        <BigbannerImg src={kompyuter}/>
<Popular>
<PopularProducts style={{color:"#FFFFFF"}}>
Macbook Pro
        </PopularProducts>
          <Lorem style={{color:"#909090"}}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Lorem>
          <BigButton style={{color:"white", border:"1px solid white"}}>Show now</BigButton>
</Popular>
        </Bigbanner>
       </BigBanners>
       <Discount>
        <DWrap>
        <DiscountTile>Discounts up to -50%</DiscountTile>
        </DWrap>
        <Roww>
  <DiscountCard>
    <Icons.Favorite/>
<DiscountImG src={aypon}/>
<DiscountTiTle>Apple iPhone 14 Pro 512GB Gold (MQ233) </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$1437</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
  <DiscountCard>
    <Icons.Favorite/>
<DiscountImG src={Soat}/>
<DiscountTiTle>AirPods Max Silver
Starlight Aluminium  </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$549</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
  <DiscountCard>
    <Icons.Favorite/>
<DiscountImG src={Camera}/>
<DiscountTiTle>Apple Watch Series 9 GPS 41mm Starlight Aluminium  </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$399</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
  <DiscountCard>
    <Icons.Favorite/>
<DiscountImG src={ofoon}/>
<DiscountTiTle>Apple iPhone 14 Pro 1TB Gold (MQ2V3) </DiscountTiTle>
 <h4 style={{fontSize:"24px", lineHeight:"24px", letterSpacing:"3%", textAlign:"center", marginTop:"8px"}}>$1499</h4>
 <DiscountBtn style={{color:"white"}}>Buy Now</DiscountBtn>
  </DiscountCard>
          </Roww>
       </Discount>
       <Banner>
       < Bannerfoto  src={fon} alt="not found" />
        <BannerWrapper>
        <BiGSummer>Big Summer Sale</BiGSummer>
        <DescBaner>Commodo fames vitae vitae leo mauris in. Eu consequat.</DescBaner>
        <BannerBtn>Show now</BannerBtn>
        </BannerWrapper>
       </Banner>
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
    </Wrapper>
  )
}
export default Home