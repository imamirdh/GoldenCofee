import React from "react";
import { CiShoppingCart } from "react-icons/ci";
function ShopCartEmpty() {
  return <div className="w-64 h-48 text-center mx-auto font-Dana font-bold space-y-6">
    <CiShoppingCart className="w-14 h-14 mx-auto text-gray-400 "/>
    <p className="text-base leading-6">هیچ محصولی به سبد خرید اضافه نشده</p>
    <button className="w-full h-14 text-xl font-light bg-teal-600 text-white rounded-xl">مشاهده صفحه فروشگاه</button>
  </div>;
}

export default ShopCartEmpty;
