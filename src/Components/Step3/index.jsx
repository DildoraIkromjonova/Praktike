import { ActionButtons, Button, CalcRow, CardBottom, CardNumber, CardTop, CheckboxLabel, ColumnTitle, Container, Container2, Content, CreditCardView, Footer, FooterAbout, FooterColumn, FooterContainer, FooterIcons, FooterList, FooterLogo, Icons, IconsWrapper, ImagePlaceholder, InfoBlock, Input, InputGroup, InputWrapper, Item, Link, List, PaymentSection, PaymentTabs, PriceCalculation, ProductDetails, ProductInfo, ProductItem, ProductList, ProductPrice, RowInputs, SectionTitle, Step33, StepIcon, Steps, StepText, StepWrapper, SummarySection, Tab } from "./step";

import Image65 from "../../assets/images/image 65.png"
import productImages from "../../assets/images/Product Image.png";
import productImages1 from "../../assets/images/Product Image 1.png";
import productImages2 from "../../assets/images/Product Image2.png";

const Step3 = () => {
  return (
    <StepWrapper>
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
      <Steps>
        <Step33>
          <StepIcon>
            <Icons.Payment />
          </StepIcon>
          <StepText>
            <span>Step 3</span>
            <strong>Payment</strong>
          </StepText>
        </Step33>
      </Steps>
      <Content>
        <Container2>
          <SummarySection>
            <SectionTitle>Summary</SectionTitle>
            <ProductList>
              <ProductItem>
                <ProductInfo>
                  <ImagePlaceholder><img  style={{width:"40px;",height:"40px"}} src={productImages} alt="not found" /></ImagePlaceholder>
                  <ProductDetails>
                    <span>Apple iPhone 14 Pro Max 128Gb</span>
                  </ProductDetails>
                </ProductInfo>
                <ProductPrice>$1399</ProductPrice>
              </ProductItem>

              <ProductItem>
                <ProductInfo>
                  <ImagePlaceholder><img  style={{width:"40px;",height:"40px"}} src={productImages1} alt="not found" /></ImagePlaceholder>
                  <ProductDetails>
                    <span>AirPods Max Silver</span>
                  </ProductDetails>
                </ProductInfo>
                <ProductPrice>$549</ProductPrice>
              </ProductItem>

              <ProductItem>
                <ProductInfo>
                  <ImagePlaceholder>
                    <img  style={{width:"40px;",height:"40px"}}src={productImages2} alt="not found" />
                    </ImagePlaceholder>
                  <ProductDetails>
                    <span>Apple Watch Series 9 GPS 41mm</span>
                  </ProductDetails>
                </ProductInfo>
                <ProductPrice>$399</ProductPrice>
              </ProductItem>
            </ProductList>

            <InfoBlock>
              <h4>Address</h4>
              <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
            </InfoBlock>

            <InfoBlock>
              <h4>Shipment method</h4>
              <p>Free</p>
            </InfoBlock>

            <PriceCalculation>
              <CalcRow>
                <span>Subtotal</span>
                <span>$2347</span>
              </CalcRow>
              <CalcRow>
                <span>Estimated Tax</span>
                <span>$50</span>
              </CalcRow>
              <CalcRow>
                <span>Estimated shipping & Handling</span>
                <span>$29</span>
              </CalcRow>
              <CalcRow className="total">
                <span>Total</span>
                <span>$2426</span>
              </CalcRow>
            </PriceCalculation>
          </SummarySection>
          <PaymentSection>
            <SectionTitle>Payment</SectionTitle>
            <PaymentTabs>
              <Tab active>Credit Card</Tab>
              <Tab>PayPal</Tab>
              <Tab>PayPal Credit</Tab>
            </PaymentTabs>
            <CreditCardView>
              <CardTop>
                <img src={Image65} alt="not found" />
              </CardTop>
              <CardBottom>
              </CardBottom>
            </CreditCardView>
            <InputGroup>
              <Input type="text" placeholder="Cardholder Name" />
              <Input type="text" placeholder="Card number" />
              <RowInputs>
                <Input type="text" placeholder="Exp Date" />
                <Input type="text" placeholder="CVV" />
              </RowInputs>
            </InputGroup>

            <CheckboxLabel>
              <input type="checkbox" defaultChecked />
              Same as billing address
            </CheckboxLabel>
            <ActionButtons>
              <Button className="back">Back</Button>
              <Button className="pay">Pay</Button>
            </ActionButtons>
          </PaymentSection>
        </Container2>
      </Content>
      <Footer>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo>cyber</FooterLogo>
            <FooterAbout>We are a residential interior design firm located in <br /> Portland. Our boutique-studio offers more than</FooterAbout>
            <FooterIcons>
          <Icons.Twitter/>
          <Icons.Fasebook/>
          <Icons.wectrr/>
          <Icons.Parent/>
          </FooterIcons>
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
       </Footer>
    </StepWrapper>
  )
}

export default Step3;