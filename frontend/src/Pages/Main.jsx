import React from 'react'
import ProductsSection from "../Components/Products/ProductsSection";
import Category from '../Components/Category/Category';
import PerSellProduct from '../Components/PerSellProducts/PerSellProduct';
import CofeClub from '../Components/CofeClub/CofeClub';
import Articles from '../Components/Articles/Articles';
import Services from "../Components/Services/Services"
function Main() {
  return (
    <div>
        <ProductsSection/>
        <Category/>
        <PerSellProduct/>
        <CofeClub/>
        <Articles/>
        <Services/>
    </div>
  )
}

export default Main