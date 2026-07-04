import { ShoppingCardWrapper, Container, InputWrapper, IconsWrapper, List, Item, Link, Title, Icons, ShoppingCardd, Content, LeftSide, Sumarry, ShoppingCartSection, CartItemRow, ProductInfoBlock, ProductMainImg, ProductTextDetails, ProductMainTitle, ProductSKU, QuantityControlBlock, QuantityBtn, QuantityValue, ProductPriceText, DeleteItemBtn, SummaryTitle, InputLabelText, CodeInputField, BonusCardRow, BonusApplyBtn, PriceCalculationBlock, CalcRow, CalcLabel, CalcValue, TotalPriceLabel, TotalPriceValue, CheckoutSubmitBtn,Sumarywraper,   Footer, FooterContainer, FooterColumn, FooterLogo,FooterAbout, ColumnTitle, FooterList,FooterIcons} from "./shopping.js";
import productImages from "../../assets/images/Product Image.png";
import productImages1 from "../../assets/images/Product Image 1.png";
import productImages2 from "../../assets/images/Product Image2.png";
import { useNavigate } from "react-router-dom";
const ShoppingCard = ()=>{
  const navigate = useNavigate()
  return (
   <ShoppingCardWrapper>
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
    <ShoppingCardd>
<Content>
  <LeftSide>
<h1>Shopping Cart</h1>
<ShoppingCartSection>
<CartItemRow>
          <ProductInfoBlock>
            <ProductMainImg src={productImages} />
            <ProductTextDetails>
              <ProductMainTitle>Apple iPhone 14 Pro Max 128GB Deep Purple</ProductMainTitle>
              <ProductSKU>#25139526913984</ProductSKU>
            </ProductTextDetails>
          </ProductInfoBlock>
          <QuantityControlBlock>
            <QuantityBtn>-</QuantityBtn>
            <QuantityValue>1</QuantityValue>
            <QuantityBtn>+</QuantityBtn>
          </QuantityControlBlock>
          <ProductPriceText>$1399</ProductPriceText>
          <DeleteItemBtn>✕</DeleteItemBtn>
 </CartItemRow>
 <CartItemRow>
          <ProductInfoBlock>
            <ProductMainImg src={productImages1} />
            <ProductTextDetails>
              <ProductMainTitle>AirPods Max Silver</ProductMainTitle>
              <ProductSKU>#53459358345</ProductSKU>
            </ProductTextDetails>
          </ProductInfoBlock>
          <QuantityControlBlock>
            <QuantityBtn>-</QuantityBtn>
            <QuantityValue>1</QuantityValue>
            <QuantityBtn>+</QuantityBtn>
          </QuantityControlBlock>
          <ProductPriceText>$549</ProductPriceText>
          <DeleteItemBtn>✕</DeleteItemBtn>
 </CartItemRow>
 <CartItemRow>
          <ProductInfoBlock>
            <ProductMainImg src={productImages2} />
            <ProductTextDetails>
              <ProductMainTitle>Apple Watch Series 9 GPS 41mm Starlight Aluminium </ProductMainTitle>
              <ProductSKU>#63632324</ProductSKU>
            </ProductTextDetails>
          </ProductInfoBlock>
          <QuantityControlBlock>
            <QuantityBtn>-</QuantityBtn>
            <QuantityValue>1</QuantityValue>
            <QuantityBtn>+</QuantityBtn>
          </QuantityControlBlock>
          <ProductPriceText>$399</ProductPriceText>
          <DeleteItemBtn>✕</DeleteItemBtn>
 </CartItemRow>
 
</ShoppingCartSection>
  </LeftSide>
  <Sumarry>
  <SummaryTitle><h2>Order Summary</h2></SummaryTitle>   
<Sumarywraper>
<InputLabelText>Discount code / Promo code</InputLabelText>
      <CodeInputField type="text" placeholder="Code" />

      <InputLabelText>Your bonus card number</InputLabelText>
      <BonusCardRow>
        <CodeInputField type="text" placeholder="Enter Card Number" style={{ flex: 1 }} />
        <BonusApplyBtn>Apply</BonusApplyBtn>
      </BonusCardRow>
      
      <PriceCalculationBlock>
        <CalcRow>
          <CalcLabel>Subtotal</CalcLabel>
          <CalcValue>$2347</CalcValue>
        </CalcRow>
        <CalcRow style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #EAEAEA" }}>
          <TotalPriceLabel>Total</TotalPriceLabel>
          <TotalPriceValue>$2426</TotalPriceValue>
        </CalcRow>
      </PriceCalculationBlock>
      <CheckoutSubmitBtn  onClick={()=>navigate("/step3")}>Checkout</CheckoutSubmitBtn>
</Sumarywraper>
  </Sumarry>
</Content>
    </ShoppingCardd>
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
   </ShoppingCardWrapper>
  )
}

export default ShoppingCard;