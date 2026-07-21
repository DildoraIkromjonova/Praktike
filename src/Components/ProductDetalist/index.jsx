import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Breadcrumbs, Button1, Button2, Buttons, Colors, Container, Content, DetailInfo, DetailItem,
  DetailsCard, DetailText, DetailTitle, FrameColor, Icons, IconsWrapper, Image2, Images, Info,
  Infocolors, InputWrapper, Item, Link, List, MainInfo, ProductImage, Productsdetalist,
  ServiceCard, ServiceInfo, ServiceTitle, ServiceValue, ServiceWrapper, Tabs, Tabsmemory, Title,
  TitleInfo, DetailValue, Discount, DWrap, DiscountTile, DiscountCard, DiscountImG, DiscountTiTle,
  DiscountBtn, Roww, FavoriteIconWrapper, Footer, FooterContainer, FooterColumn, FooterLogo,
  FooterAbout, ColumnTitle, FooterList, FooterIcons,
} from "./productdetal";
import ImagesIphone from "../../assets/images/ImagesIphone.png";
import Ellipse12 from "../../assets/images/Ellipse 12.png";
import Ellipse13 from "../../assets/images/Ellipse 13.png";
import Ellipse14 from "../../assets/images/Ellipse 14.png";
import Ellipse15 from "../../assets/images/Ellipse 15.png";
import Ellipse16 from "../../assets/images/Ellipse 16.png";
import Soat from "../../assets/images/soat.png";
import aypon from "../../assets/images/aypon.png";
import ofoon from "../../assets/images/ofponnn.png";
import Camera from "../../assets/images/camera.png";

const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";
const CART_ROUTE = "/ShoppingCard";
const WISHLIST_ROUTE = "/favorite";

const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};
const writeCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

const readWishlist = () => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  } catch {
    return [];
  }
};
const writeWishlist = (list) => localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));

const colorOptions = [
  { id: "c1", img: Ellipse12, name: "Gold" },
  { id: "c2", img: Ellipse13, name: "Silver" },
  { id: "c3", img: Ellipse15, name: "Graphite" },
  { id: "c4", img: Ellipse16, name: "Sierra Blue" },
  { id: "c5", img: Ellipse14, name: "Deep Purple" },
];

const memoryOptions = ["128GB", "256GB", "512GB", "1TB"];

const relatedProducts = [
  { id: "r1", img: aypon, title: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: 1437 },
  { id: "r2", img: Soat, title: "AirPods Max Silver Starlight Aluminium", price: 549 },
  { id: "r3", img: Camera, title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium", price: 399 },
  { id: "r4", img: ofoon, title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: 1499 },
];

const HeartIcon = ({ filled }) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "#FF3B30" : "none"}
    stroke={filled ? "#FF3B30" : "#8B8B8B"}
    strokeWidth="1.8"
    style={{ transition: "all 0.15s ease" }}
  >
    <path d="M12 21s-6.716-4.35-9.428-8.485C.6 9.028 1.2 5.2 4.5 3.6 7 2.4 9.6 3 12 5.4 14.4 3 17 2.4 19.5 3.6c3.3 1.6 3.9 5.428 1.928 8.915C18.716 16.65 12 21 12 21z" />
  </svg>
);

const ProductDetalist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [selectedColor, setSelectedColor] = useState(colorOptions[0].id);
  const [selectedMemory, setSelectedMemory] = useState("1TB");
  const [added, setAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [wishlist, setWishlist] = useState(readWishlist());
  const [cart, setCart] = useState(readCart());
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const isWishlisted = product ? wishlist.includes(product.id) : false;

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("wishlist");
    localStorage.removeItem("cart");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setShowProfileMenu(false);
    navigate("/login");
  };

  const toggleMainWishlist = () => {
    if (!product) return;
    setWishlist((prev) => {
      const updated = prev.includes(product.id)
        ? prev.filter((i) => i !== product.id)
        : [...prev, product.id];
      writeWishlist(updated);
      return updated;
    });
  };

  const toggleRelatedWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      writeWishlist(updated);
      return updated;
    });
  };

  if (!product) {
    return (
      <Productsdetalist>
        <Container>
          <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>cyber</h1>
        </Container>
        <div style={{ padding: "80px 40px", textAlign: "center" }}>
          <h2>Mahsulot topilmadi</h2>
          <p style={{ color: "#8B8B8B", marginTop: "8px" }}>
            Iltimos, katalog orqali mahsulotni tanlang.
          </p>
          <button
            onClick={() => navigate("/product1")}
            style={{
              marginTop: "24px",
              padding: "12px 24px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Katalogga qaytish
          </button>
        </div>
      </Productsdetalist>
    );
  }

  const handleAddToCart = () => {
    const cart = readCart();
    const variantId = `${product.id}-${selectedColor}-${selectedMemory}`;
    const existing = cart.find((item) => item.variantId === variantId);
  
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.variantId === variantId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          variantId,
          id: product.id,
          title: product.title,
          price: product.price,
          img: product.img,
          color: colorOptions.find((c) => c.id === selectedColor)?.name,
          memory: selectedMemory,
          quantity: 1,
        },
      ];
    }
  
    writeCart(updatedCart);
    setCart(updatedCart);
    setAdded(true);
  
    setTimeout(() => {
      setAdded(false);
      navigate("/ShoppingCard");
    }, 600);
  };

  const handleAddRelatedToCart = (item) => {
    const cart = readCart();
    const existing = cart.find((c) => c.variantId === item.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((c) =>
        c.variantId === item.id ? { ...c, quantity: (c.quantity || 1) + 1 } : c
      );
    } else {
      updatedCart = [
        ...cart,
        { variantId: item.id, id: item.id, title: item.title, price: item.price, img: item.img, quantity: 1 },
      ];
    }
    writeCart(updatedCart);
    setCart(updatedCart);
  };

  return (
    <Productsdetalist>
      <Container>
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>cyber</h1>
        <InputWrapper>
          <Icons.SearchIcon />
          <input style={{ border: "none", outline: "none", background: "transparent" }} placeholder="Search" />
        </InputWrapper>
        <List>
          <Item><Link onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</Link></Item>
          <Item><Link onClick={() => navigate("/about")} style={{ cursor: "pointer" }}>About</Link></Item>
          <Item><Link onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>Contact Us</Link></Item>
          <Item><Link onClick={() => navigate("/blog")} style={{ cursor: "pointer" }}>Blog</Link></Item>
        </List>
        <IconsWrapper>
          <span style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate(WISHLIST_ROUTE)}>
            <Icons.Love />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "10px",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {wishlist.length}
              </span>
            )}
          </span>
          <span style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/card")}>
            <Icons.Savat />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "black",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "10px",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </span>
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
      <Breadcrumbs>
        <Title>
          <h4 style={{ color: "#A4A4A4", cursor: "pointer" }} onClick={() => navigate("/")}>Home</h4>
          <Icons.Right />
          <h4 style={{ color: "#A4A4A4", cursor: "pointer" }} onClick={() => navigate("/product1")}>Catalog</h4>
          <Icons.Right />
          <h4 style={{ color: "#A4A4A4" }}>Smartphones</h4>
          <Icons.Right />
          <h4 style={{ color: "#A4A4A4" }}>Apple</h4>
          <Icons.Right />
          <h4>{product.title}</h4>
        </Title>
      </Breadcrumbs>
      <MainInfo>
        <Images>
          <ProductImage>
            {[product.img, product.img, product.img, product.img].map((thumb, index) => (
              <img
                key={index}
                src={thumb || ImagesIphone}
                alt={product.title}
                onClick={() => setSelectedImage(thumb)}
                style={{
                  width: "76px",
                  height: "93px",
                  objectFit: "contain",
                  cursor: "pointer",
                  border: (selectedImage || product.img) === thumb ? "1px solid #000" : "1px solid transparent",
                  borderRadius: "6px",
                }}
              />
            ))}
          </ProductImage>
          <Image2>
            <img
              src={selectedImage || product.img || ImagesIphone}
              alt={product.title}
              style={{ maxWidth: "360px", width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Image2>
          <Info>
            <Content>
              <TitleInfo style={{ marginBottom: "25px" }}>
                <h1 style={{ fontSize: "40px", width: "536px", height: "40px", marginBottom: "16px" }}>
                  {product.title}
                </h1>
              </TitleInfo>

              <Infocolors>
                <Colors>
                  <h5>Select color :</h5>
                  <FrameColor>
                    {colorOptions.map((c) => (
                      <img
                        key={c.id}
                        src={c.img}
                        alt={c.name}
                        title={c.name}
                        onClick={() => setSelectedColor(c.id)}
                        style={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          outline: selectedColor === c.id ? "2px solid #000" : "2px solid transparent",
                          outlineOffset: "2px",
                          transition: "outline 0.15s ease",
                        }}
                      />
                    ))}
                  </FrameColor>
                </Colors>
                <Tabsmemory>
                  {memoryOptions.map((mem) => (
                    <Tabs
                      key={mem}
                      onClick={() => setSelectedMemory(mem)}
                      style={{
                        cursor: "pointer",
                        border: selectedMemory === mem ? "1px solid #000000" : "1px solid #d5d5d5",
                      }}
                    >
                      <p style={{ color: selectedMemory === mem ? "#000000" : "#6F6F6F", textAlign: "center" }}>
                        {mem}
                      </p>
                    </Tabs>
                  ))}
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
                  {product.desc ||
                    "Enhanced capabilities thanks to an enlarged display and work without recharging throughout the day."}{" "}
                  <span style={{ color: "black", textDecoration: "underline", cursor: "pointer" }}>more...</span>
                </DetailText>
              </Infocolors>
              <Buttons>
                <Button1
                  onClick={toggleMainWishlist}
                  style={{
                    background: isWishlisted ? "#000" : "#fff",
                  }}
                >
                  <h5 style={{ fontSize: "14px", color: isWishlisted ? "#fff" : "#000" }}>
                    {isWishlisted ? "In Wishlist ✓" : "Add to Wishlist"}
                  </h5>
                </Button1>
                <Button2 onClick={handleAddToCart} style={{ background: added ? "#2E7D32" : "#000" }}>
                  <h5 style={{ fontSize: "14px", color: "white" }}>
                    {added ? "Added ✓" : "Add to Card"}
                  </h5>
                </Button2>
              </Buttons>
              <ServiceWrapper>
                <ServiceCard>
                  <Icons.Delivery />
                  <ServiceInfo>
                    <ServiceTitle>Free Delivery</ServiceTitle>
                    <ServiceValue>1-2 day</ServiceValue>
                  </ServiceInfo>
                </ServiceCard>
                <ServiceCard>
                  <Icons.Shop />
                  <ServiceInfo>
                    <ServiceTitle>In Stock</ServiceTitle>
                    <ServiceValue>Today</ServiceValue>
                  </ServiceInfo>
                </ServiceCard>
                <ServiceCard>
                  <Icons.Verify />
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
          {relatedProducts.map((item) => {
            const isFav = wishlist.includes(item.id);
            return (
              <DiscountCard key={item.id}>
                <FavoriteIconWrapper onClick={() => toggleRelatedWishlist(item.id)} style={{ cursor: "pointer" }}>
                  <HeartIcon filled={isFav} />
                </FavoriteIconWrapper>
                <DiscountImG
                  src={item.img}
                  onClick={() => navigate("/ProductDetalist", { state: { product: item } })}
                  style={{ cursor: "pointer" }}
                />
                <DiscountTiTle>{item.title}</DiscountTiTle>
                <DiscountBtn style={{ color: "white" }} onClick={() => handleAddRelatedToCart(item)}>
                  Buy Now
                </DiscountBtn>
              </DiscountCard>
            );
          })}
        </Roww>
      </Discount>
      <Footer>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo>cyber</FooterLogo>
            <FooterAbout>
              We are a residential interior design firm located in <br />
              Portland. Our boutique-studio offers more than
            </FooterAbout>
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
          <Icons.Twitter />
          <Icons.Fasebook />
          <Icons.wectrr />
          <Icons.Parent />
        </FooterIcons>
      </Footer>
    </Productsdetalist>
  );
};
export default ProductDetalist;