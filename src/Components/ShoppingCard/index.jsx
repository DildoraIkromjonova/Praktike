import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCardWrapper, Container, InputWrapper, IconsWrapper, List, Item, Link, Title, Icons,
  ShoppingCardd, Content, LeftSide, Sumarry, ShoppingCartSection, CartItemRow, ProductInfoBlock,
  ProductMainImg, ProductTextDetails, ProductMainTitle, ProductSKU, QuantityControlBlock,
  QuantityBtn, QuantityValue, ProductPriceText, DeleteItemBtn, SummaryTitle, InputLabelText,
  CodeInputField, BonusCardRow, BonusApplyBtn, PriceCalculationBlock, CalcRow, CalcLabel,
  CalcValue, TotalPriceLabel, TotalPriceValue, CheckoutSubmitBtn, Sumarywraper, Footer,
  FooterContainer, FooterColumn, FooterLogo, FooterAbout, ColumnTitle, FooterList, FooterIcons,
} from "./shopping.js";
import ImagesIphone from "../../assets/images/ImagesIphone.png";

const CART_KEY = "cart";

const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};
const writeCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

const ShoppingCard = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [bonusCard, setBonusCard] = useState("");
  const [discount, setDiscount] = useState(0);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("wishlist");
    localStorage.removeItem("cart");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setShowProfileMenu(false);
    navigate("/login");
  };

  useEffect(() => {
    setCart(readCart());
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    writeCart(updated);
  };

  const handleIncrease = (variantId) => {
    const updated = cart.map((item) =>
      item.variantId === variantId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const handleDecrease = (variantId) => {
    const updated = cart
      .map((item) =>
        item.variantId === variantId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  const handleDelete = (variantId) => {
    const updated = cart.filter((item) => item.variantId !== variantId);
    updateCart(updated);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SALE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = Math.round(subtotal * (1 - discount));

  return (
    <ShoppingCardWrapper>
      <Container>
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>cyber</h1>
        <InputWrapper>
          <Icons.SearchIcon />
          <input
            style={{ border: "none", outline: "none", background: "transparent" }}
            placeholder="Search"
          />
        </InputWrapper>
        <List>
  <Item>
    <Link onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
      Home
    </Link>
  </Item>

  <Item>
    <Link onClick={() => navigate("/about")} style={{ cursor: "pointer" }}>
      About
    </Link>
  </Item>

  <Item>
    <Link onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>
      Contact Us
    </Link>
  </Item>

  <Item>
    <Link onClick={() => navigate("/blog")} style={{ cursor: "pointer" }}>
      Blog
    </Link>
  </Item>
</List>
        <IconsWrapper>
         <Icons.Love onClick={()=>navigate("/favorite")} style={{cursor:"pointer"}} />
          <Icons.Savat onClick={() => navigate("/card")} style={{ cursor: "pointer" }} />
          <span
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => setShowProfileMenu((prev) => !prev)}
          >
            <Icons.Vector />
            {showProfileMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "36px",
                  right: "0",
                  background: "#fff",
                  border: "1px solid #EAEAEA",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  padding: "8px 0",
                  minWidth: "140px",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#000000",
                  }}
                  onClick={handleLogout}
                >
                  Log out
                </div>
              </div>
            )}
          </span>
        </IconsWrapper>
      </Container>
      <hr />
      <ShoppingCardd>
        <Content>
          <LeftSide>
            <h1>Shopping Cart</h1>
            <ShoppingCartSection>
              {cart.length === 0 ? (
                <div style={{ padding: "40px 0", textAlign: "center", color: "#8B8B8B" }}>
                  <p>Savatingiz hozircha bo'sh.</p>
                  <button
                    onClick={() => navigate("/Product1")}
                    style={{
                      marginTop: "16px",
                      padding: "12px 24px",
                      background: "black",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Katalogga o'tish
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <CartItemRow key={item.variantId}>
                    <ProductInfoBlock>
                      <ProductMainImg src={item.img || ImagesIphone} />
                      <ProductTextDetails>
                        <ProductMainTitle>{item.title}</ProductMainTitle>
                        <ProductSKU>
                          {[item.color, item.memory].filter(Boolean).join(" • ") || `#${item.variantId}`}
                        </ProductSKU>
                      </ProductTextDetails>
                    </ProductInfoBlock>
                    <QuantityControlBlock>
                      <QuantityBtn onClick={() => handleDecrease(item.variantId)}>-</QuantityBtn>
                      <QuantityValue>{item.quantity}</QuantityValue>
                      <QuantityBtn onClick={() => handleIncrease(item.variantId)}>+</QuantityBtn>
                    </QuantityControlBlock>
                    <ProductPriceText>${item.price * item.quantity}</ProductPriceText>
                    <DeleteItemBtn onClick={() => handleDelete(item.variantId)}>✕</DeleteItemBtn>
                  </CartItemRow>
                ))
              )}
            </ShoppingCartSection>
          </LeftSide>
          <Sumarry>
            <SummaryTitle><h2>Order Summary</h2></SummaryTitle>
            <Sumarywraper>
              <InputLabelText>Discount code / Promo code</InputLabelText>
              <CodeInputField
                type="text"
                placeholder="Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                onBlur={handleApplyPromo}
              />

              <InputLabelText>Your bonus card number</InputLabelText>
              <BonusCardRow>
                <CodeInputField
                  type="text"
                  placeholder="Enter Card Number"
                  style={{ flex: 1 }}
                  value={bonusCard}
                  onChange={(e) => setBonusCard(e.target.value)}
                />
                <BonusApplyBtn onClick={handleApplyPromo}>Apply</BonusApplyBtn>
              </BonusCardRow>

              <PriceCalculationBlock>
                <CalcRow>
                  <CalcLabel>Subtotal</CalcLabel>
                  <CalcValue>${subtotal}</CalcValue>
                </CalcRow>
                {discount > 0 && (
                  <CalcRow>
                    <CalcLabel>Discount</CalcLabel>
                    <CalcValue>-{Math.round(subtotal * discount)}</CalcValue>
                  </CalcRow>
                )}
                <CalcRow
                  style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #EAEAEA" }}
                >
                  <TotalPriceLabel>Total</TotalPriceLabel>
                  <TotalPriceValue>${total}</TotalPriceValue>
                </CalcRow>
              </PriceCalculationBlock>
              <CheckoutSubmitBtn
                onClick={() => cart.length > 0 && navigate("/Step3")}
                style={{ opacity: cart.length === 0 ? 0.5 : 1, cursor: cart.length === 0 ? "not-allowed" : "pointer" }}
              >
                Checkout
              </CheckoutSubmitBtn>
            </Sumarywraper>
          </Sumarry>
        </Content>
      </ShoppingCardd>
      <Footer>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo>cyber</FooterLogo>
            <FooterAbout>
              We are a residential interior design firm located in <br /> Portland. Our boutique-studio offers more than
            </FooterAbout>
            <FooterIcons>
              <Icons.Twitter />
              <Icons.Fasebook />
              <Icons.wectrr />
              <Icons.Parent />
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
  );
};

export default ShoppingCard;