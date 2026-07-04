import Home from "../Components/Home";
import Product1 from "../Components/Product1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetalist from "../Components/ProductDetalist";
import ShoppingCard from "../Components/ShoppingCard";
import Step3 from "../Components/Step3";

const Root =()=>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/Product1" element={<Product1/>}/>
  <Route  path="/ProductDetalist" element={<ProductDetalist/>}/>
  <Route  path="/ShoppingCard" element={<ShoppingCard/>}/>
  <Route  path="/Step3" element={<Step3/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Root;