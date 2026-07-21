import React from "react";
import {
  productsRow1,
  productsRow2,
  discountProducts,
} from "../../Data/products";

const Favorite = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const allProducts = [
    ...productsRow1,
    ...productsRow2,
    ...discountProducts,
  ];

  const favoriteProducts = allProducts.filter((product) =>
    wishlist.includes(product.id)
  );

  return (
    <div style={{ padding: "30px" }}>

  
      {favoriteProducts.length === 0 ? (
        <h2>Favorite mahsulot yo'q</h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {favoriteProducts.map((product) => (
            <div
              key={product.id}
              style={{
                width: "250px",
                border: "1px solid #ddd",
                padding: "20px",
                margin: "15px",
                textAlign: "center",
              }}
            >
              <img
                src={product.img}
                alt={product.title}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
  
              <h3>{product.title}</h3>
              <h2>${product.price}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;