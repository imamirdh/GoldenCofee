import React from "react";

function ShopCartMenuItem() {
  return (
    <div className="flex items-center border-b border-b-gray-200">
      <img
        src="./images/products/p2.png"
        alt=""
        className="w-[120px] h-[120px]"
      />
      <div className="body h-[120]  flex-col justify-between">
        <p className="text-zinc-700 leading-6 text-[14px] lg:text-base font-bold dark:text-white line-clamp-2">
          قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
        </p>
        <div className="footer-body">
          <div className="text-teal-600 text-[12px] lg:text-[14px] leading-6 dark:text-emerald-500">
            <span>14.500</span>
            <span>تومان تخفیف</span>
          </div>
          <div className="dark:text-white">
            <span className="text-base lg:text-xl font-bold leading-6">175000</span>
            <span className="text-[12px] lg:text-[14px] mx-1">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCartMenuItem;
