import React from "react";
import ShopCartMenuItem from "./ShopCartMenuItem";
import ShopCartEmpty from "./ShopCartEmpty";
import { MdArrowBackIosNew } from "react-icons/md";
function ShopCartMenu() {
  return (
    <div
      className="w-[400px] transition-all invisible opacity-0 group-hover:visible group-hover:opacity-100 font-Dana space-y-4 tracking-normal  absolute top-full left-full border-t-4 rounded-2xl p-5 bg-white border-orange-300 shadow-shadow-normal text-zinc-700 dark:bg-zinc-700 dark:text-white text-base
    child:leading-6"
    >
      <div className="headershopcart flex items-center justify-between">
        <p className="text-gray-300 leading-6">1 مورد</p>
        <a href="" className="text-orange-300 flex items-center gap-2">
          مشاهده سبد خرید <MdArrowBackIosNew />
        </a>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        <ShopCartMenuItem />
      </div>
      <div className="footer flex items-center justify-between">
        <div>
          <p className="leading-6 text-gray-300 text-[14px]">
            مبلغ قابل پرداخت
          </p>
          <div>
            <span className="text-xl font-bold leading-6">175000</span>
            <span className="text-[14px] mx-1">تومان</span>
          </div>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl w-36 h-14 text-xl transition-all">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
}

export default ShopCartMenu;
