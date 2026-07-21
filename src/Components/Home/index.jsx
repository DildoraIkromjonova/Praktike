import { useEffect, useState } from "react";
import {
  AirpodDesc, AirpodImg, AirpodsCard, AirpodTitle, AirpodWrapper, Arrows, Banner, BannerBtn, BannerDesc, Bannerfoto, BannerImG, Bannertitle, BannerWrapper, Bigbanner, BigbannerImg, BigBanners, BigButton, BiGSummer, BottomCards, BrowseCategory, CategoryCard, Categoryes, ColumnTitle, Container, Container2, Container3, Content, ContentButton, Desc, DescBaner, Discount, DiscountBtn, DiscountCard, DiscountImG, DiscountTile, DiscountTiTle, DWrap, Footer, FooterAbout, FooterColumn, FooterContainer, FooterIcons, FooterList, FooterLogo, Icons, IconsWrapper, IMG, InputWrapper, Item, LeftSection, Link, List, Lorem, Makbook, MakbookButton, MakbookDesc, MakbookImg, MakbookTitle, MakbookWrapper, Popular, PopularProducts, ProductBtn, ProductCard, Products, ProductsGrid, ProductsImG, ProductTiTle, PS5Banner, Row1, Row2, Roww, Tag, TagCategory, Tags, Title, TitleH1, TitleWrapper, VisionCard, VisionDesc, VisionImg, VisionTitle, VisionWrapper, Wrapper
} from "./style";
import IphoneImg from "../../assets/images/iphone.png"
import Play from "../../assets/images/Play.png"
import Hero from "../../assets/images/hero.png"
import Images from "../../assets/images/Images.png"
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
import Group from "../../assets/images/Group 1.png"
import Foto from "../../assets/images/Foto.png"
import Rasm from "../../assets/images/Rasm.png"
import kompyuter from "../../assets/images/kompyuter.png"
import ofoon from "../../assets/images/ofponnn.png"
import aypon from "../../assets/images/aypon.png"
import fon from "../../assets/images/fon.png"
import Iphone12 from "../../assets/images/iphone12.png"
import Iphone13 from "../../assets/images/iphone13.png"
import Iphone15 from "../../assets/images/iphone15.png"
import Samsung24 from "../../assets/images/samsung24.png"
import { useNavigate } from "react-router-dom";
import {
  productsRow1,
  productsRow2,
  discountProducts,
} from "../../Data/products";
const tabs = ["New Arrival", "Bestseller", "Featured Products"];
const categoriesData = [
  { id: "cat1", img: Phones, label: "Phones" },
  { id: "cat2", img: SmartWatches, label: "Smart Watches" },
  { id: "cat3", img: Cameras, label: "Cameras" },
  { id: "cat4", img: Headphones, label: "Headphones" },
  { id: "cat5", img: Computers, label: "Computers" },
  { id: "cat6", img: Gaming, label: "Gaming" },
];

const heroSlides = [
  {
    id: "s12",
    name: "iPhone 12",
    subTitle: "Pro",
    tag: "Blast past fast.",
    desc: "A total powerhouse. With 5G speed for downloading and streaming.",
    img: Iphone12,
    bg: "#1D2A35",
    route: "/product1",
  },
  {
    id: "s13",
    name: "iPhone 13",
    subTitle: "Pro",
    tag: "Pro. Beyond.",
    desc: "The most powerful iPhone ever. Built for what's next.",
    img: Iphone13,
    bg: "#4A4A4A",
    route: "/product1",
  },
  {
    id: "s14",
    name: "iPhone 14",
    subTitle: "Pro",
    tag: "Pro.Beyond.",
    desc: "Created to change everything for the better. For everyone",
    img: IphoneImg,
    bg: "#1A1A1A",
    route: "/product1",
  },
  {
    id: "s15",
    name: "iPhone 15",
    subTitle: "Pro",
    tag: "Titanium. So strong. So light.",
    desc: "Forged in titanium and designed to be the ultimate iPhone.",
    img: Iphone15,
    bg: "#26272B",
    route: "/product1",
  },
  {
    id: "android1",
    name: "Galaxy S24",
    subTitle: "",
    tag: "Galaxy AI is here.",
    desc: "Search like never before. Circle to search with Gemini.",
    img: Samsung24,
    bg: "#0F2A3D",
    route: "/product1",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    const isConfirm = window.confirm("Chiqishni xohlaysizmi?");

    if (isConfirm) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setOpen(false);
      navigate("/");
    }
  };

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const [cart, setCart] = useState(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  const cartCount = cart.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = heroSlides[currentSlide];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = [...productsRow1, ...productsRow2];

  const filteredProducts = searchTerm.trim()
    ? allProducts.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
    : null;

  const displayRow1 = filteredProducts
    ? filteredProducts.slice(0, 4)
    : productsRow1;

  const displayRow2 = filteredProducts
    ? filteredProducts.slice(4, 8)
    : productsRow2;

  const [categoryOrder, setCategoryOrder] = useState(categoriesData);
  const rotateCategoryRight = () => {
    setCategoryOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const rotateCategoryLeft = () => {
    setCategoryOrder((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)];
    });
  };
  const renderProductCard = (product, isDiscount = false) => {
    const isFav = wishlist.includes(product.id);
    const Card = isDiscount ? DiscountCard : ProductCard;
    const Img = isDiscount ? DiscountImG : ProductsImG;
    const TitleTag = isDiscount ? DiscountTiTle : ProductTiTle;
    const Btn = isDiscount ? DiscountBtn : ProductBtn;

    return (
      <Card key={product.id}>
        <span
          onClick={() => toggleWishlist(product.id)}
          style={{ cursor: "pointer" }}
        >
          {isFav ? (
            <Icons.Like style={{ color: "red" }} />
          ) : (
            <Icons.Favorite />
          )}
        </span>
        <Img src={product.img} alt="not found" />
        <TitleTag>{product.title}</TitleTag>
        <h4
          style={{
            fontSize: "24px",
            lineHeight: "24px",
            letterSpacing: "3%",
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          ${product.price}
        </h4>
        <Btn
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => addToCart(product)}
        >
          Buy Now
        </Btn>
      </Card>
    );
  };

  return (
    <Wrapper>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Container>
        <h1>cyber</h1>
        <InputWrapper>
          <Icons.SearchIcon />
          <input
            style={{ border: "none", outline: "none", background: "transparent" }}
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputWrapper>
        <List>
          <Item><Link to="/">Home</Link></Item>
          <Item><Link to="/about">About</Link></Item>
          <Item><Link to="/contact">Contact Us</Link></Item>
          <Item><Link to="/blog">Blog</Link></Item>
        </List>
        <IconsWrapper>
          <span style={{ position: "relative", cursor: "pointer" }}
            onClick={() => navigate("/favorite")}
          >
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
          <span style={{ position: "relative", cursor: "pointer" }}
            onClick={() => navigate("/card")}
          >
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
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setOpen(!open)}
              style={{ cursor: "pointer" }}
            >
              <Icons.Vector />
            </span>

            {open && (
              <div
                style={{
                  position: "absolute",
                  top: "35px",
                  right: "0",
                  width: "120px",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,.2)",
                  zIndex: 1000,
                }}
              >
                <div
                  onClick={logout}
                  style={{
                    padding: "12px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  Log out
                </div>
              </div>
            )}
          </div>
        </IconsWrapper>
      </Container>

      <Container2
        style={{
          position: "relative",
          background: activeSlide.bg,
          transition: "background 0.6s ease",
        }}
      >
        <Content
          key={activeSlide.id}
          style={{ animation: "fadeIn 0.6s ease" }}
        >
          <Title>{activeSlide.name}</Title>
          <Tag>
            {activeSlide.subTitle
              ? `${activeSlide.name} `
              : activeSlide.name}
            {activeSlide.subTitle && (
              <span
                style={{
                  fontWeight: "600",
                  fontStyle: "Semi bold",
                  fontSize: "90px",
                  lineHeight: "70px",
                  letterSpacing: "-1%",
                }}
              >
                {activeSlide.subTitle}
              </span>
            )}
          </Tag>
          <Desc>{activeSlide.desc}</Desc>
          <ContentButton
            style={{ color: "#FFFFFF", cursor: "pointer" }}
            onClick={() => navigate(activeSlide.route)}
          >
            Shop Now
          </ContentButton>
        </Content>

        <IMG
          key={activeSlide.img + activeSlide.id}
          src={activeSlide.img}
          alt="not found"
          style={{
            animation: "fadeIn 0.6s ease",
            width: "100%",
            maxWidth: "320px",
            height: "auto",
            objectFit: "contain",
          }}
        />

        <span
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            zIndex: 2,
            background: "rgba(255,255,255,0.15)",
            borderRadius: "50%",
            padding: "6px",
            display: "flex",
          }}
        >
          <Icons.Arrow />
        </span>
        <span
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            zIndex: 2,
            background: "rgba(255,255,255,0.15)",
            borderRadius: "50%",
            padding: "6px",
            display: "flex",
          }}
        >
          <Icons.arowRight />
        </span>

        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 2,
          }}
        >
          {heroSlides.map((slide, index) => (
            <span
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: currentSlide === index ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </Container2>

      <Container3>
        <LeftSection>
          <PS5Banner>
            <BannerImG src={Play} alt="not found" />
            <TitleWrapper>
              <Bannertitle>Playstation 5</Bannertitle>
              <BannerDesc>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </BannerDesc>
            </TitleWrapper>
          </PS5Banner>
          <BottomCards>
            <AirpodsCard>
              <AirpodImg src={Hero} alt="not found" />
              <AirpodWrapper>
                <AirpodTitle>
                  Apple <br />
                  AirPods <br /> <span style={{ fontWeight: "900" }}>Max</span>
                </AirpodTitle>
                <AirpodDesc>Computational audio. Listen, it's powerful</AirpodDesc>
              </AirpodWrapper>
            </AirpodsCard>
            <VisionCard>
              <VisionImg src={Images} alt="not found" />
              <VisionWrapper>
                <VisionTitle>
                  Apple <br />
                  Vision <span style={{ fontWeight: "900" }}>Pro</span>
                </VisionTitle>
                <VisionDesc>An immersive way to experience entertainment</VisionDesc>
              </VisionWrapper>
            </VisionCard>
          </BottomCards>
        </LeftSection>
        <Makbook>
          <MakbookWrapper>
            <MakbookTitle>
              Macbook <br />
              <span style={{ fontWeight: "500", fontStyle: "Medium" }}>Air</span>
            </MakbookTitle>
            <MakbookDesc>
              The new 15‑inch MacBook Air makes room for more of what you
              love with a spacious Liquid Retina display.
            </MakbookDesc>
            <MakbookButton>Shop Now</MakbookButton>
          </MakbookWrapper>
          <MakbookImg src={Mak} alt="not found " />
        </Makbook>
      </Container3>

      <BrowseCategory>
        <TagCategory style={{ justifyContent: "space-between" }}>
          <TitleH1>Browse By Category</TitleH1>
          <Arrows>
            <span onClick={rotateCategoryLeft} style={{ cursor: "pointer" }}>
              <Icons.Arrow />
            </span>
            <span onClick={rotateCategoryRight} style={{ cursor: "pointer" }}>
              <Icons.arowRight />
            </span>
          </Arrows>
        </TagCategory>
        <Categoryes>
          {categoryOrder.map((cat) => (
            <CategoryCard
              key={cat.id}
              style={{ animation: "fadeIn 0.4s ease", cursor: "pointer" }}
            >
              <img src={cat.img} alt="not found" />
              <p>{cat.label}</p>
            </CategoryCard>
          ))}
        </Categoryes>
      </BrowseCategory>

      <Products>
        <Tags>
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                color: activeTab === tab ? "#000000" : "#8B8B8B",
                fontWeight: activeTab === tab ? "600" : "400",
                fontSize: "18px",
                lineHeight: "32px",
                cursor: "pointer",
              }}
            >
              {tab}
            </p>
          ))}
        </Tags>
        <ProductsGrid>
          {filteredProducts && filteredProducts.length === 0 ? (
            <p style={{ padding: "24px 0", color: "#8B8B8B" }}>
              "{searchTerm}" bo'yicha mahsulot topilmadi.
            </p>
          ) : (
            <>
              <Row1>{displayRow1.map((p) => renderProductCard(p))}</Row1>
              {displayRow2.length > 0 && (
                <Row2>{displayRow2.map((p) => renderProductCard(p))}</Row2>
              )}
            </>
          )}
        </ProductsGrid>
      </Products>

      <BigBanners>
        <Bigbanner>
          <BigbannerImg src={Group} />
          <Popular>
            <PopularProducts>Popular Products</PopularProducts>
            <Lorem>
              iPad combines a magnificent 10.2-inch Retina display,
              incredible performance, multitasking and ease of use.
            </Lorem>
            <BigButton
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => navigate("/product1")}
            >
              Show now
            </BigButton>
          </Popular>
        </Bigbanner>
        <Bigbanner style={{ background: "#F9F9F9" }}>
          <BigbannerImg src={Foto} />
          <Popular>
            <PopularProducts>Ipad Pro </PopularProducts>
            <Lorem>
              iPad combines a magnificent 10.2-inch Retina display,
              incredible performance, multitasking and ease of use.
            </Lorem>
            <BigButton
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => navigate("/product1")}
            >
              Show now
            </BigButton>
          </Popular>
        </Bigbanner>
        <Bigbanner style={{ background: "#EAEAEA" }}>
          <BigbannerImg src={Rasm} />
          <Popular>
            <PopularProducts>Samsung Galaxy</PopularProducts>
            <Lorem>
              iPad combines a magnificent 10.2-inch Retina display,
              incredible performance, multitasking and ease of use.
            </Lorem>
            <BigButton
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => navigate("/product1")}
            >
              Show now
            </BigButton>
          </Popular>
        </Bigbanner>
        <Bigbanner style={{ background: "#2C2C2C" }}>
          <BigbannerImg src={kompyuter} />
          <Popular>
            <PopularProducts style={{ color: "#FFFFFF" }}>Macbook Pro</PopularProducts>
            <Lorem style={{ color: "#909090" }}>
              iPad combines a magnificent 10.2-inch Retina display,
              incredible performance, multitasking and ease of use.
            </Lorem>
            <BigButton
              style={{ color: "white", border: "1px solid white", cursor: "pointer" }}
              onClick={() => navigate("/product1")}
            >
              Show now
            </BigButton>
          </Popular>
        </Bigbanner>
      </BigBanners>

      <Discount>
        <DWrap>
          <DiscountTile>Discounts up to -50%</DiscountTile>
        </DWrap>
        <Roww>
          {discountProducts.map((p) => renderProductCard(p, true))}
        </Roww>
      </Discount>

      <Banner>
        <Bannerfoto src={fon} alt="not found" />
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
    </Wrapper>
  );
};

export default Home;