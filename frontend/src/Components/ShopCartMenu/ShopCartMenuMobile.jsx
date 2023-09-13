import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";
import ShopCartMenuItem from "./ShopCartMenuItem";
import AppContext from "../../Context/AppContext";
function ShopCartMenuMobile() {
  const contextdata = useContext(AppContext);
  const [shopCartBox, setShopCartBox] = useState(false);
  useEffect(() => {
    if (contextdata.shopCartMenuMobile) {
      setShopCartBox(true);
    }
  }, []);
  return ReactDOM.createPortal(
    <div
      className={
        contextdata.isDark
          ? "dark w-screen h-screen fixed top-0 bg-opacity-50 bg-black font-Dana z-40"
          : "w-screen h-screen fixed top-0 bg-opacity-50 bg-black font-Dana z-40"
      }
    >
      <div
        className={
          shopCartBox
            ? " bg-white w-3/4 h-screen p-4 opacity-1 transition-all duration-500 opacity-1 dark:bg-zinc-700 flex flex-col justify-between"
            : "bg-white w-3/4 h-screen p-4 opacity-0 -translate-x-[100%] transition-all duration-500 dark:bg-zinc-700 flex flex-col justify-between"
        }
      >
        <div className="shopcarttop">
          <div className="headershopcartmenu flex items-center justify-between pt-1 pb-5 text-zinc-700 dark:text-white border-b border-b-gray-300">
            <p>سبد خرید</p>
            <button
              className="dark:text-white"
              onClick={() => {
                setShopCartBox(false);
                setTimeout(() => {
                  contextdata.setShopCartMenuMobile(false);
                }, 300);
              }}
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          </div>
          <div className="body max-h-[450px] overflow-y-auto" dir="rtl">
            <ShopCartMenuItem />
            <ShopCartMenuItem />
            
          </div>
        </div>
        <div className="footer flex items-center justify-between" dir="rtl">
          <div>
            <p className="leading-6 text-gray-300 text-[12px] lg:text-[14px]">
              مبلغ قابل پرداخت
            </p>
            <div className="dark:text-white">
              <span className="text-base lg:text-xl font-bold leading-6">175000</span>
              <span className="text-[12px] lg:text-[14px] mx-1">تومان</span>
            </div>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl w-28 lg:w-36 h-11 lg:h-14 lg:text-xl transition-all">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default ShopCartMenuMobile;
