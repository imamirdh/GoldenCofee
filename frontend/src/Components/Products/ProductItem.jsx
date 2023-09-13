import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiArrowsRightLeft, HiOutlineStar } from "react-icons/hi2";
import Button from "../Input/Button";
function ProductItem({
  title,
  img,
  count = 0,
  price,
  lastprice,
  score = 0,
  discount,
  shortName,
}) {
  return (
    <div className="lg:w-[300px] lg:h-[467px] w-[1/2] h-[273px] bg-white dark:bg-zinc-700 shadow-sm p-2 rounded-2xl ">
      {count > 0 && discount && (
        <div className="bg-orange-300 text-[12px] lg:text-base text-white dark:text-zinc-700 absolute px-[14px] py-1 rounded-[100px] font-medium">
          {discount}%
        </div>
      )}
      <Button to={`product/${shortName}`}>
      <img
        src={img}
        alt=""
        className="lg:w-[260px] lg:h-[260px] w-32 h-32 mx-auto"
      />
      </Button>
      <div className="body lg:my-5 mt-2 mb-[10px]">
        <p className="lg:text-xl text-[14px] leading-7 font-DanaMedium dark:text-white">
          {title}
        </p>
        <div className="flex items-center gap-3 lg:mt-[10px] mt-[6px]">
          {count == 0 && (
            <p className="lg:text-xl text-red-400">فعلا موجود نیست</p>
          )}
          {count >= 1 && (
            <p className="lg:text-xl text-base leading-7 font-DanaDemiBold text-teal-600 dark:text-emerald-500">
              {price}
              <span className="lg:text-[14px] text-[12px] leading-5 font-Dana">
                تومان
              </span>
            </p>
          )}
          {count > 0 && discount > 0 && (
            <p className="lg:text-xl text-[12px] leading-7 font-DanaDemiBold text-gray-400 relative">
              <div className="w-full h-px bg-red-500 absolute top-1/2 "></div>
              {lastprice}
              <span className="hidden lg:inline-block text-[14px] leading-5 font-Dana">
                تومان
              </span>
            </p>
          )}
        </div>
      </div>
      <div className="footercard flex items-center justify-between">
        <div className="buttons flex ">
          <Button
            className="transition-all lg:p-[7px] p-[5px] w-[26px] h-[26px] rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-400 lg:w-9 lg:h-9  me-3 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white"
            to={`product/${shortName}`}
          >
            <FiShoppingCart className="lg:w-[22px] lg:h-[22px] w-4 h-4" />
          </Button>
          <button className="transition-all text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500">
            <HiArrowsRightLeft className="lg:w-6 lg:h-6 w-4 h-4" />
          </button>
        </div>
        <div
          className="flex items-center text-gray-300 child:w-4 child:h-4 child:lg:w-6 child:lg:h-6"
          dir="ltr"
        >
          <HiOutlineStar className={score >= 1 && "text-yellow-400"} />
          <HiOutlineStar className={score >= 2 && "text-yellow-400"} />
          <HiOutlineStar className={score >= 3 && "text-yellow-400"} />
          <HiOutlineStar className={score >= 4 && "text-yellow-400"} />
          <HiOutlineStar className={score == 5 && "text-yellow-400"} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
