import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ActionButtons, Button, CalcRow, CardBottom, CardNumber, CardTop, CheckboxLabel, ColumnTitle,
  Container, Container2, Content, CreditCardView, Footer, FooterAbout, FooterColumn,
  FooterContainer, FooterIcons, FooterList, FooterLogo, Icons, IconsWrapper, ImagePlaceholder,
  InfoBlock, Input, InputGroup, InputWrapper, Item, Link, List, PaymentSection, PaymentTabs,
  PriceCalculation, ProductDetails, ProductInfo, ProductItem, ProductList, ProductPrice,
  RowInputs, SectionTitle, Step33, StepIcon, Steps, StepText, StepWrapper, SummarySection, Tab,
} from "./step";

import Image65 from "../../assets/images/image 65.png";
import ImagesIphone from "../../assets/images/ImagesIphone.png";

const CART_KEY = "cart";
const CART_ROUTE = "/card";

const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};

const paymentTabs = ["Credit Card", "PayPal", "PayPal Credit"];

const Step3 = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("Credit Card");
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [isPaying, setIsPaying] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    cardholderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  useEffect(() => {
    setCart(readCart());
  }, []);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const tax = Math.round(subtotal * 0.02);
  const shipping = cart.length > 0 ? 29 : 0;
  const total = subtotal + tax + shipping;

  const handleBack = () => {
    navigate(CART_ROUTE);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  
    navigate("/login");
  };
  const validateForm = () => {
    if (activeTab !== "Credit Card") return true;

    const newErrors = {};
    if (!form.cardholderName.trim()) newErrors.cardholderName = "Name is required";
    if (!/^\d{12,19}$/.test(form.cardNumber.replace(/\s/g, "")))
      newErrors.cardNumber = "Invalid card number";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expDate))
      newErrors.expDate = "Format: MM/YY";
    if (!/^\d{3,4}$/.test(form.cvv)) newErrors.cvv = "Invalid CVV";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePay = () => {
    if (cart.length === 0) return;
    if (!validateForm()) return;

    setIsPaying(true);
    setTimeout(() => {
      localStorage.removeItem(CART_KEY);
      setIsPaying(false);
      navigate("/", { state: { orderSuccess: true } });
    }, 1200);
  };

  return (
    <StepWrapper>
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
          <Icons.Savat onClick={() => navigate(CART_ROUTE)} style={{ cursor: "pointer" }} />
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
              {cart.length === 0 ? (
                <p style={{ color: "#8B8B8B" }}>Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <ProductItem key={item.variantId || `${item.id}-${index}`}>
                    <ProductInfo>
                      <ImagePlaceholder>
                        <img
                          style={{ width: "40px", height: "40px", objectFit: "contain" }}
                          src={item.img || ImagesIphone}
                          alt="not found"
                        />
                      </ImagePlaceholder>
                      <ProductDetails>
                        <span>
                          {item.title} {item.quantity > 1 ? `× ${item.quantity}` : ""}
                        </span>
                      </ProductDetails>
                    </ProductInfo>
                    <ProductPrice>${item.price * (item.quantity || 1)}</ProductPrice>
                  </ProductItem>
                ))
              )}
            </ProductList>

            <InfoBlock>
              <h4>Address</h4>
              <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
            </InfoBlock>

            <InfoBlock>
              <h4>Shipment method</h4>
              <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
            </InfoBlock>

            <PriceCalculation>
              <CalcRow>
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </CalcRow>
              <CalcRow>
                <span>Estimated Tax</span>
                <span>${tax}</span>
              </CalcRow>
              <CalcRow>
                <span>Estimated shipping & Handling</span>
                <span>${shipping}</span>
              </CalcRow>
              <CalcRow className="total">
                <span>Total</span>
                <span>${total}</span>
              </CalcRow>
            </PriceCalculation>
          </SummarySection>
          <PaymentSection>
            <SectionTitle>Payment</SectionTitle>
            <PaymentTabs>
              {paymentTabs.map((tabName) => (
                <Tab
                  key={tabName}
                  active={activeTab === tabName}
                  onClick={() => setActiveTab(tabName)}
                  style={{ cursor: "pointer" }}
                >
                  {tabName}
                </Tab>
              ))}
            </PaymentTabs>

            {activeTab === "Credit Card" ? (
              <>
                <CreditCardView>
                  <CardTop>
                    <img src={Image65} alt="not found" />
                  </CardTop>
                  <CardBottom>
                    {form.cardNumber && <CardNumber>{form.cardNumber}</CardNumber>}
                  </CardBottom>
                </CreditCardView>
                <InputGroup>
                  <div>
                    <Input
                      type="text"
                      placeholder="Cardholder Name"
                      value={form.cardholderName}
                      onChange={handleChange("cardholderName")}
                      style={errors.cardholderName ? { border: "1px solid red" } : undefined}
                    />
                    {errors.cardholderName && (
                      <p style={{ color: "red", fontSize: "12px", margin: "4px 0 0" }}>
                        {errors.cardholderName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Card number"
                      value={form.cardNumber}
                      onChange={handleChange("cardNumber")}
                      style={errors.cardNumber ? { border: "1px solid red" } : undefined}
                    />
                    {errors.cardNumber && (
                      <p style={{ color: "red", fontSize: "12px", margin: "4px 0 0" }}>
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>
                  <RowInputs>
                    <div style={{ flex: 1 }}>
                      <Input
                        type="text"
                        placeholder="Exp Date (MM/YY)"
                        value={form.expDate}
                        onChange={handleChange("expDate")}
                        style={errors.expDate ? { border: "1px solid red" } : undefined}
                      />
                      {errors.expDate && (
                        <p style={{ color: "red", fontSize: "12px", margin: "4px 0 0" }}>
                          {errors.expDate}
                        </p>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <Input
                        type="text"
                        placeholder="CVV"
                        value={form.cvv}
                        onChange={handleChange("cvv")}
                        style={errors.cvv ? { border: "1px solid red" } : undefined}
                      />
                      {errors.cvv && (
                        <p style={{ color: "red", fontSize: "12px", margin: "4px 0 0" }}>
                          {errors.cvv}
                        </p>
                      )}
                    </div>
                  </RowInputs>
                </InputGroup>

                <CheckboxLabel>
                  <input
                    type="checkbox"
                    checked={sameAsBilling}
                    onChange={(e) => setSameAsBilling(e.target.checked)}
                  />
                  Same as billing address
                </CheckboxLabel>
              </>
            ) : (
              <div style={{ padding: "24px 0", color: "#8B8B8B" }}>
                <p>Payment via {activeTab} will be processed in the next step.</p>
              </div>
            )}

            <ActionButtons>
              <Button className="back" onClick={handleBack} disabled={isPaying}>
                Back
              </Button>
              <Button
                className="pay"
                onClick={handlePay}
                disabled={isPaying || cart.length === 0}
                style={{ opacity: isPaying || cart.length === 0 ? 0.6 : 1 }}
              >
                {isPaying ? "Processing..." : "Pay"}
              </Button>
            </ActionButtons>
          </PaymentSection>
        </Container2>
      </Content>
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
    </StepWrapper>
  );
};

export default Step3;