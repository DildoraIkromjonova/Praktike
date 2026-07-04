import { Breadcrumbs, CheckboxLabel, ColumnTitle, Container, Content, Dots, Dropdown, Filters, Footer, FooterAbout, FooterColumn, FooterContainer, FooterIcons, FooterList, FooterLogo, Frame, Frame1, Frame2, Icons, IconsWrapper, InputWrapper, Item, Link, List, PageButton, Pagination, ProductsFrame, ProductBtn, ProductCard, ProductsImg, ProductsPage, ProductTitle, Row1, Row2, Row3, SearchBrands, SearchInput, Title, TopPart, Wrapper } from "./product.js";
import ofoon from "../../assets/images/ofponnn.png";
import Pro from "../../assets/images/15.png";
import ayfon12 from "../../assets/images/ayfon12.png";
import ayfon14 from "../../assets/images/ayfon14.png";
import ifhon from "../../assets/images/ifhon.png";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()
  return (
    <ProductsPage>
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
          <h4>Smartphones</h4>
        </Title>
      </Breadcrumbs>
      <Content>
        <Frame>
          <Filters>
            <Frame1>
              <Frame2>
                <h4>Brand</h4>
                <Icons.Control />
              </Frame2>
              <hr style={{ color: "#B5B5B5" }} />
              <SearchBrands>
                <SearchInput placeholder="search" />
                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" defaultChecked />
                    <span>Apple</span>
                    <span className="count">110</span>
                  </div>
                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>Samsung</span>
                    <span className="count">125</span>
                  </div>
                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>Xiaomi</span>
                    <span className="count">68</span>
                  </div>
                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>Poco</span>
                    <span className="count">44</span>
                  </div>
                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>OPPO</span>
                    <span className="count">36</span>
                  </div>
                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>Honor</span>
                    <span className="count">10</span>
                  </div>
                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>Motorola</span>
                    <span className="count">34</span>
                  </div>
                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>Nokia</span>
                    <span className="count">22</span>
                  </div>

                </CheckboxLabel>

                <CheckboxLabel>
                  <div className="left-side">
                    <input type="checkbox" />
                    <span>Realme</span>
                    <span className="count">35</span>
                  </div>
                </CheckboxLabel>
              </SearchBrands>
            </Frame1>
            <Frame1 style={{ marginTop: "12px" }}>
              <Frame2 style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "8px" }}>
                <h4>Battery capacity</h4>
                <Icons.Errow />
              </Frame2>
            </Frame1>
            <Frame1 style={{ marginTop: "12px" }}>
              <Frame2 style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "8px" }}>
                <h4>Screen type</h4>
                <Icons.Errow />
              </Frame2>
            </Frame1>
            <Frame1 style={{ marginTop: "12px" }}>
              <Frame2 style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "8px" }}>
                <h4>Screen diagonal</h4>
                <Icons.Errow />
              </Frame2>
            </Frame1>
            <Frame1 style={{ marginTop: "12px" }}>
              <Frame2 style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "8px" }}>
                <h4>Protection class</h4>
                <Icons.Errow />
              </Frame2>
            </Frame1>
            <Frame1 style={{ marginTop: "12px" }}>
              <Frame2 style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "8px" }}>
                <h4> Built-in memory</h4>
                <Icons.Errow />
              </Frame2>
            </Frame1>
          </Filters>
          <ProductsFrame>
            <TopPart>
              <h4 style={{ color: "#6C6C6C" }}>Selected Products: <span style={{ color: "#000000" }}>85</span></h4>
              <Dropdown>
                <h4>By rating</h4>
                <Icons.Strlka />
              </Dropdown>
            </TopPart>
            <Wrapper>
              <Row1>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={ayfon12}
      onClick={() => navigate("/ProductDetalist")} />
                  <ProductTitle> Apple iPhone 14 Pro <br /> 512GB Gold (MQ233) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$1437</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={ifhon}      onClick={() => navigate("/ProductDetalist")} />
                  <ProductTitle>Apple iPhone 11 128GB White (MQ233) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$510</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={ifhon}      onClick={() => navigate("/ProductDetalist")} />
                  <ProductTitle>Apple iPhone 11 128GB White
                    (MQ233) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$550</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
              </Row1>
              <Row2>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={ofoon}  onClick={() => navigate("/ProductDetalist")} />
                  <ProductTitle>Apple iPhone 14 Pro 1TB Gold (MQ2V3) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$1499</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={ayfon12}  onClick={() => navigate("/ProductDetalist")} />
                  <ProductTitle>Apple iPhone 14 Pro 1TB Gold (MQ2V3) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$1399</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={Pro}   onClick={() => navigate("/ProductDetalist")}/>
                  <ProductTitle>Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$1600</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
              </Row2>
              <Row3>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={ayfon14}   onClick={() => navigate("/ProductDetalist")}/>
                  <ProductTitle>Apple iPhone 13 mini 128GB Pink (MLK23)</ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$850</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={Pro}  onClick={() => navigate("/ProductDetalist")} />
                  <ProductTitle>Apple iPhone 14 Pro 256GB Space Black (MQ0T3) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$1399</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
                <ProductCard>
                  <Icons.Favorite />
                  <ProductsImg src={ofoon}  onClick={() => navigate("/ProductDetalist")} />
                  <ProductTitle>Apple iPhone 14 Pro 256GB Silver (MQ103) </ProductTitle>
                  <h4 style={{ fontSize: "24px", lineHeight: "24px", letterSpacing: "3%", textAlign: "center", marginTop: "8px" }}>$1399</h4>
                  <ProductBtn style={{ color: "white" }}>Buy Now</ProductBtn>
                </ProductCard>
              </Row3>
            </Wrapper>
            <Pagination>
              <Icons.Arrow/>
              <PageButton active>1</PageButton>
              <PageButton>2</PageButton>
              <PageButton>3</PageButton>
              <Dots>....</Dots>
              <PageButton>12</PageButton>
              <Icons.arowRight/>
            </Pagination>
          </ProductsFrame>
        </Frame>
      </Content>
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
    </ProductsPage>
  )
};
export default Product;