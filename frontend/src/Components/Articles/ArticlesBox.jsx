import React from "react";
import { IoIosArrowBack } from "react-icons/io";
function ArticlesBox({ img, title, date }) {
  return (
    <div className="lg:w-[300px] lg:h-[285px] w-full h-full flex items-center lg:block dark:bg-zinc-700 dark:text-white bg-white p-[10px] rounded-2xl font-Dana">
      <img
        src={img}
        alt=""
        className="lg:w-[280px] lg:h-[186px] w-[129px] h-[129px] rounded-2xl rounded-bl-4xl"
      />
      <div className="articlbody flex items-center justify-between pt-4 ">
        <div className="p-2 lg:p-0 space-y-5">
          <p className="lg:text-lg text-[14px] leading-7">{title}</p>
          <button className="lg:hidden px-2 py-px text-orange-300 bg-orange-300 bg-opacity-20 rounded-lg flex items-center">مطالعه <IoIosArrowBack/></button>
        </div>
        <div className="text-teal-600 dark:text-emerald-500 lg:pe-7 pe-5">
          <p className="text-2xl leading-[34px] font-DanaMedium">{date.day}</p>
          <p className="text-[14px] leading-5">{date.month}</p>
          <p className="text-[14px] leading-5">{date.year}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticlesBox;
