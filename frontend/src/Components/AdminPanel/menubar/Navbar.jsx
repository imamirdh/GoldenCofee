import React, { useContext, useState } from "react";
import AppContext from "../../../Context/AppContext";
import { BsSun, BsClock, BsCalendarDate } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import Clock from "clock-react";

function Navbar({ name = "امیررضا", task = "مدیر", img = "./img/yolme.jpg" }) {
  const contextdata = useContext(AppContext);
  let today = new Date().toLocaleDateString("fa-IR");
const [sidebarMobile , setSidebarMobile]=useState(false)
  console.log(contextdata.userInfos);
  return (
    <div className="navbar  flex justify-between items-center h-[10%] bg-zinc-100 text-zinc-700 font font-Dana border-b border-zinc-800 dark:border-orange-300 dark:bg-zinc-800 dark:text-gray-300">
      <div className="profile flex items-center">
        <img src={contextdata.userInfos.profile} alt="prof" className="w-12 h-12 rounded-full border" />
        <div className="mx-2 ">
          <p className="font-DanaDemiBold dark:text-orange-200">
            {contextdata.userInfos.name}
          </p>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {contextdata.userInfos.role === "USER" ? "کاربر" : "مدیر"}
          </span>
        </div>
      </div>
      <div className="iconsnavbar flex items-center justify-end px-5">
        <div className="hidden info lg:block  gap-5 me-4">
          <div className="clock flex items-center gap-5">
            <div className="text-2xl">
              <BsClock />
            </div>
            <div className="italic text-lg font-VazirLight">
              <Clock />
            </div>
          </div>
          <div className="date flex items-center gap-5">
            <div className="text-2xl">
              <BsCalendarDate />
            </div>
            <div className="italic text-lg font-VazirLight">{today}</div>
          </div>
        </div>
        <button
          className="me-5 p-2 text-xl border-2 rounded-full hover:text-violet-400 hover:border-violet-500 hover:rotate-45 duration-500 transition-all"
          onClick={() => contextdata.setIsDarkTheme((prev) => !prev)}
        >
          {contextdata.isDark ? <BsSun /> : <BiMoon />}
        </button>
        <button
          className="lg:hidden me-5 p-2 text-xl border-2 rounded-full hover:text-violet-400 hover:border-violet-500 hover:translate-x-2 duration-500 transition-all"
          onClick={() => contextdata.setSidebarMobile((prev) => !prev)}
        >
          <MdMenuOpen />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
