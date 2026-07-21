import Home from "../Components/Home";
import Product1 from "../Components/Product1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetalist from "../Components/ProductDetalist";
import ShoppingCard from "../Components/ShoppingCard";
import Step3 from "../Components/Step3";
import Favorite from "../Components/Favorite/favorite";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import Card from "../Components/Card/card.jsx"
import Register from "../Components/Register"
import Login from "../Components/Login"
import Proroutes from "../Components/proroutes.jsx"



const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Proroutes>
                <Home />
              </Proroutes>
            }  />
          <Route path="/Product1" element={<Product1 />} />
          <Route path="/ProductDetalist" element={<ProductDetalist />} />
          <Route path="/ShoppingCard" element={<ShoppingCard />} />
          <Route path="/Step3" element={<Step3 />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/card" element={<Card />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Root;