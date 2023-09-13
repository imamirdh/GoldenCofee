import React from "react";
import { IoIosArrowBack } from "react-icons/io";
function SectionHeader({ title, subtitle, btntitle , children }) {
  return (
    <div className="container">
      <h1 className="font-MorabbaMedium lg:text-[40px] text-[24px]  text-zinc-700 leading-tight dark:text-white">
        {title}
      </h1>
      <div
        className="flex justify-between items-center
        "
      >
        <p className="font-Morabba text-zinc-700 leading-tight lg:text-[25px] text-[18px] dark:text-white">
          {subtitle}
        </p>
        {btntitle && (
          <button className="text-orange-300 flex items-center gap-2 lg:text-base text-[12px] font-medium lg:font-Dana">
            {btntitle}
            <IoIosArrowBack />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default SectionHeader;
