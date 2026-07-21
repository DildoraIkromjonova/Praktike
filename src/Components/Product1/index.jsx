import { useEffect, useMemo, useState } from "react";
import { Breadcrumbs, CheckboxLabel, ColumnTitle, Container, Content, Dots, Dropdown, Filters, Footer, FooterAbout, FooterColumn, FooterContainer, FooterIcons, FooterList, FooterLogo, Frame, Frame1, Frame2, Icons, IconsWrapper, InputWrapper, Item, Link, List, PageButton, Pagination, ProductsFrame, ProductBtn, ProductCard, ProductsImg, ProductsPage, ProductTitle, Row1, Row2, Row3, SearchBrands, SearchInput, Title, TopPart, Wrapper } from "./product.js";
import ofoon from "../../assets/images/ofponnn.png";
import Pro from "../../assets/images/15.png";
import ayfon12 from "../../assets/images/ayfon12.png";
import ayfon14 from "../../assets/images/ayfon14.png";
import ifhon from "../../assets/images/ifhon.png";
import { useNavigate } from "react-router-dom";

const allProducts = [
  { id: "1", brand: "Apple", img: ayfon12, title: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: 1437, desc: "Apple iPhone 14 Pro - featuring Dynamic Island, a 48MP camera, and the A16 Bionic chip.", battery: "4000-5000mAh", screenType: "OLED", screenDiagonal: "6.1\"-6.5\"", protection: "IP68", memory: "512GB" },
  { id: "2", brand: "Apple", img: ifhon, title: "Apple iPhone 11 128GB White (MQ233)", price: 510, desc: "Apple iPhone 11 - dual camera system and Liquid Retina display.", battery: "3000-4000mAh", screenType: "LCD", screenDiagonal: "6.1\"-6.5\"", protection: "IP67", memory: "128GB" },
  { id: "3", brand: "Apple", img: ifhon, title: "Apple iPhone 11 128GB White (MQ233)", price: 550, desc: "Apple iPhone 11 - dual camera system and Liquid Retina display.", battery: "3000-4000mAh", screenType: "LCD", screenDiagonal: "6.1\"-6.5\"", protection: "IP67", memory: "128GB" },
  { id: "4", brand: "Apple", img: ofoon, title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: 1499, desc: "Apple iPhone 14 Pro with 1TB storage - the largest capacity available.", battery: "4000-5000mAh", screenType: "OLED", screenDiagonal: "6.1\"-6.5\"", protection: "IP68", memory: "1TB" },
  { id: "5", brand: "Apple", img: ayfon12, title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: 1399, desc: "Apple iPhone 14 Pro with 1TB storage, in Gold.", battery: "4000-5000mAh", screenType: "OLED", screenDiagonal: "6.1\"-6.5\"", protection: "IP68", memory: "1TB" },
  { id: "6", brand: "Apple", img: Pro, title: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)", price: 1600, desc: "Apple iPhone 14 Pro in Deep Purple, with 128GB storage.", battery: "4000-5000mAh", screenType: "OLED", screenDiagonal: "6.5\"+", protection: "IP68", memory: "128GB" },
  { id: "7", brand: "Apple", img: ayfon14, title: "Apple iPhone 13 mini 128GB Pink (MLK23)", price: 850, desc: "Apple iPhone 13 mini - compact size with powerful performance.", battery: "Under 3000mAh", screenType: "OLED", screenDiagonal: "Under 6.1\"", protection: "IP68", memory: "128GB" },
  { id: "8", brand: "Apple", img: Pro, title: "Apple iPhone 14 Pro 256GB Space Black (MQ0T3)", price: 1399, desc: "Apple iPhone 14 Pro in Space Black, with 256GB storage.", battery: "4000-5000mAh", screenType: "OLED", screenDiagonal: "6.1\"-6.5\"", protection: "IP68", memory: "256GB" },
  { id: "9", brand: "Apple", img: ofoon, title: "Apple iPhone 14 Pro 256GB Silver (MQ103)", price: 1399, desc: "Apple iPhone 14 Pro in Silver, with 256GB storage.", battery: "4000-5000mAh", screenType: "OLED", screenDiagonal: "6.1\"-6.5\"", protection: "IP68", memory: "256GB" },
];

const filterGroups = [
  { key: "battery", label: "Battery capacity", options: ["Under 3000mAh", "3000-4000mAh", "4000-5000mAh"] },
  { key: "screenType", label: "Screen type", options: ["OLED", "LCD"] },
  { key: "screenDiagonal", label: "Screen diagonal", options: ["Under 6.1\"", "6.1\"-6.5\"", "6.5\"+"] },
  { key: "protection", label: "Protection class", options: ["IP68", "IP67"] },
  { key: "memory", label: "Built-in memory", options: ["128GB", "256GB", "512GB", "1TB"] },
];

const brandsList = [
  { name: "Apple", count: 110 },
  { name: "Samsung", count: 125 },
  { name: "Xiaomi", count: 68 },
  { name: "Poco", count: 44 },
  { name: "OPPO", count: 36 },
  { name: "Honor", count: 10 },
  { name: "Motorola", count: 34 },
  { name: "Nokia", count: 22 },
  { name: "Realme", count: 35 },
];

const PAGE_SIZE = 9;

const Product = () => {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
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

  const addToCart = (e, product) => {
    e.stopPropagation();
    setCart((prev) => [...prev, product]);
  };

  const cartCount = cart.length;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState(["Apple"]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const [brandSearch, setBrandSearch] = useState("");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [selectedFilters, setSelectedFilters] = useState({
    battery: [],
    screenType: [],
    screenDiagonal: [],
    protection: [],
    memory: [],
  });

  const toggleFilterOption = (groupKey, option) => {
    setSelectedFilters((prev) => {
      const current = prev[groupKey];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [groupKey]: updated };
    });
    setCurrentPage(1);
  };

  const [sortMode, setSortMode] = useState("none");
  const cycleSortMode = () => {
    setSortMode((prev) => (prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"));
  };
  const sortLabel =
    sortMode === "none" ? "Default order" : sortMode === "asc" ? "Price: low to high" : "Price: high to low";

  const [currentPage, setCurrentPage] = useState(1);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("wishlist");
    localStorage.removeItem("cart");

    setShowProfileMenu(false);
    navigate("/login");
  };

  const filteredProducts = useMemo(() => {
    let list = allProducts;

    if (selectedBrands.length > 0) {
      list = list.filter((p) => selectedBrands.includes(p.brand));
    }
    if (searchTerm.trim()) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    }
    filterGroups.forEach((group) => {
      const selected = selectedFilters[group.key];
      if (selected.length > 0) {
        list = list.filter((p) => selected.includes(p[group.key]));
      }
    });

    if (sortMode !== "none") {
      list = [...list].sort((a, b) => (sortMode === "asc" ? a.price - b.price : b.price - a.price));
    }

    return list;
  }, [selectedBrands, searchTerm, sortMode, selectedFilters]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageProducts = filteredProducts.slice(pageStart, pageStart + PAGE_SIZE);

  const row1 = pageProducts.slice(0, 3);
  const row2 = pageProducts.slice(3, 6);
  const row3 = pageProducts.slice(6, 9);

  const goToDetail = (product) => {
    navigate("/ProductDetalist", { state: { product } });
  };

  const filteredBrands = brandsList.filter((b) =>
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const renderCard = (product) => {
    const isFav = wishlist.includes(product.id);
    return (
      <ProductCard key={product.id} style={{ cursor: "pointer" }} onClick={() => goToDetail(product)}>
        <span
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            zIndex: 2,
            cursor: "pointer",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isFav ? (
            <Icons.Like style={{ width: "24px", height: "24px", display: "block" }} />
          ) : (
            <Icons.Favorite style={{ width: "24px", height: "24px", display: "block" }} />
          )}
        </span>
        <ProductsImg src={product.img} onClick={() => goToDetail(product)} />
        <ProductTitle>{product.title}</ProductTitle>
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
        <ProductBtn style={{ color: "white" }} onClick={(e) => addToCart(e, product)}>
          Buy Now
        </ProductBtn>
      </ProductCard>
    );
  };

  return (
    <ProductsPage>
      <Container>
        <h1>cyber</h1>
        <InputWrapper>
          <Icons.SearchIcon />
          <input
            style={{ border: "none", outline: "none", background: "transparent" }}
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </InputWrapper>
        <List>
          <Item><Link onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</Link></Item>
          <Item><Link onClick={() => navigate("/about")} style={{ cursor: "pointer" }}>About</Link></Item>
          <Item><Link onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>Contact Us</Link></Item>
          <Item><Link onClick={() => navigate("/blog")} style={{ cursor: "pointer" }}>Blog</Link></Item>
        </List>
        <IconsWrapper>
          <span
            style={{ position: "relative", cursor: "pointer" }}
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
          <span style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/card")}>
            <Icons.Savat />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute", top: "-8px", right: "-8px", background: "black",
                  color: "white", borderRadius: "50%", fontSize: "10px", width: "16px",
                  height: "16px", display: "flex", alignItems: "center", justifyContent: "center",
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
          <h4 style={{ color: "#A4A4A4", cursor: "pointer" }} onClick={() => setCurrentPage(1)}>Catalog</h4>
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
                <SearchInput
                  placeholder="search"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                />
                {filteredBrands.map((b) => (
                  <CheckboxLabel key={b.name}>
                    <div className="left-side">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(b.name)}
                        onChange={() => {
                          toggleBrand(b.name);
                          setCurrentPage(1);
                        }}
                      />
                      <span>{b.name}</span>
                      <span className="count">{b.count}</span>
                    </div>
                  </CheckboxLabel>
                ))}
              </SearchBrands>
            </Frame1>
            {filterGroups.map((group) => (
              <Frame1 key={group.key} style={{ marginTop: "12px" }}>
                <Frame2
                  style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "8px", cursor: "pointer" }}
                  onClick={() => toggleSection(group.key)}
                >
                  <h4>{group.label}</h4>
                  <span
                    style={{
                      display: "inline-flex",
                      transform: openSections[group.key] ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <Icons.Errow />
                  </span>
                </Frame2>
                {openSections[group.key] && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                    {group.options.map((option) => (
                      <CheckboxLabel key={option}>
                        <div className="left-side">
                          <input
                            type="checkbox"
                            checked={selectedFilters[group.key].includes(option)}
                            onChange={() => toggleFilterOption(group.key, option)}
                          />
                          <span>{option}</span>
                        </div>
                      </CheckboxLabel>
                    ))}
                  </div>
                )}
              </Frame1>
            ))}
          </Filters>
          <ProductsFrame>
            <TopPart>
              <h4 style={{ color: "#6C6C6C" }}>
                Selected Products: <span style={{ color: "#000000" }}>{filteredProducts.length}</span>
              </h4>
              <Dropdown
                style={{ cursor: "pointer" }}
                onClick={cycleSortMode}
                title="Click to change sorting order"
              >
                <h4>{sortLabel}</h4>
                <Icons.Strlka />
              </Dropdown>
            </TopPart>
            <Wrapper>
              {pageProducts.length === 0 ? (
                <p style={{ color: "#8B8B8B", padding: "40px 0", textAlign: "center" }}>
                  No products found.
                </p>
              ) : (
                <>
                  <Row1>{row1.map(renderCard)}</Row1>
                  {row2.length > 0 && <Row2>{row2.map(renderCard)}</Row2>}
                  {row3.length > 0 && <Row3>{row3.map(renderCard)}</Row3>}
                </>
              )}
            </Wrapper>
            <Pagination>
              <span
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                style={{ cursor: "pointer" }}
              >
                <Icons.Arrow />
              </span>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(0, 3)
                .map((page) => (
                  <PageButton
                    key={page}
                    $active={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                    style={{ cursor: "pointer" }}
                  >
                    {page}
                  </PageButton>
                ))}
              {totalPages > 4 && <Dots>....</Dots>}
              {totalPages > 3 && (
                <PageButton
                  $active={currentPage === totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                  style={{ cursor: "pointer" }}
                >
                  {totalPages}
                </PageButton>
              )}
              <span
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                style={{ cursor: "pointer" }}
              >
                <Icons.arowRight />
              </span>
            </Pagination>
          </ProductsFrame>
        </Frame>
      </Content>
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
    </ProductsPage>
  );
};

export default Product;