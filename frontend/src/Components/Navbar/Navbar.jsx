import React, { useContext, useEffect } from "react";
import {
  HiOutlineShoppingCart,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineLogin,
  HiOutlineUser,
  HiOutlineChat,
  HiCog,
} from "react-icons/hi";

import ShopCartMenu from "../ShopCartMenu/ShopCartMenu";
import AppContext from "../../Context/AppContext";
import { Link } from "react-router-dom";
import App from "../../App";
function Navbar({ home }) {
  const Appcontext = useContext(AppContext);
  const userInfos = Appcontext.userInfos;
  useEffect(() => {
    console.log(userInfos);
  }, []);
  return (
    <nav
      className={`navbarcofe z-10 lg:flex hidden items-center justify-between   h-20 ${
        home &&
        " bg-black bg-opacity-50  w-[90%] mx-auto rounded-3xl backdrop-blur fixed left-0 right-0 top-9"
      } px-10 py-5 font-Dana bg-zinc-700`}
      dir="rtl"
    >
      <div className="navright w-1/2 flex items-center gap-x-9">
        <a href="" className="logolink">
          <img src="./images/Logos/app-logo.png" alt="" />
        </a>
        <ul className="menulist flex items-center gap-x-5 text-gray-300 tracking-tightest">
          <li>
            <a href="" className="menulink font-DanaMedium text-orange-200">
              صفحه اصلی
            </a>
          </li>
          <li className="relative group">
            <a href="" className="menulink">
              فروشگاه
            </a>
            <ul
              className="transition-all invisible opacity-0 group-hover:visible group-hover:opacity-100 font-Dana space-y-4 tracking-normal  absolute top-full w-52 border-t-4 rounded-2xl p-6 bg-white border-orange-300 shadow-shadow-normal text-zinc-700 dark:bg-zinc-700 dark:text-white text-base
                         child:leading-6 child:h-6 child:inline-block child:transition-colors child-hover:text-orange-300"
            >
              <a href="#">قهوه ویژه</a>

              <a href="#">ویژه در سطح جهانی</a>

              <a href="#">قهوه درجه یک</a>

              <a href="#">ترکیبات تجاری</a>

              <a href="#">کپسول قهوه</a>

              <a href="#">قهوه زینو برزیلی</a>
            </ul>
          </li>
          <li>
            <a href="" className="menulink">
              دیکشنری
            </a>
          </li>
          <li>
            <a href="" className="menulink">
              بلاگ
            </a>
          </li>
          <li>
            <a href="" className="menulink">
              درباره ما
            </a>
          </li>
          <li>
            <a href="" className="menulink">
              تماس با ما
            </a>
          </li>
        </ul>
      </div>
      <div className="navleft w-1/2 flex items-center justify-end gap-5">
        <div className="flex items-center gap-x-5">
          <div className="carticon relative group">
            <div className="">
              <HiOutlineShoppingCart className="text-orange-200 w-6 h-6" />
            </div>
            <div className="cartshop">
              <ShopCartMenu />
            </div>
          </div>
          <button
            onClick={() => Appcontext.setIsDark((prev) => !prev)}
            className="text-orange-200 hover:text-slate-100 transition-all w-6 h-6 child:w-full child:h-full"
          >
            {Appcontext.isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </div>
        <div className="w-px h-14 bg-white/20"></div>
        <div className="">
          {!Appcontext.isLogedIn ? (
            <Link
              to={"/Login"}
              className=" text-orange-200 h-14 tracking-tightest"
            >
              <div className="flex items-center hover:text-white transition-all">
                <HiOutlineLogin className="rotate-180 mx-1 w-6 h-6" />
                <span>ورود | ثبت‌نام</span>
              </div>
            </Link>
          ) : (
            <div className="text-orange-200 h-14 flex items-center hover:text-white transition-all font-Dana group relative">
              <HiOutlineUser className=" mx-1 w-6 h-6" />
              <span>{userInfos.name}</span>
              <div className="w-52 absolute top-full left-1 transition-all invisible opacity-0 group-hover:visible group-hover:opacity-100 border-t-4 rounded-2xl p-5 bg-white border-orange-300 shadow-shadow-normal text-zinc-700 dark:bg-zinc-700 dark:text-white text-base">
                <div
                  className="space-y-4 child-hover:border-s-2 child:border-s-orange-300 
                child:ps-1
                child:transition-all"
                >
                  <button className="flex items-center">
                    <HiCog className="me-1 w-6 h-6" />
                    <span>پنل کاربر</span>
                  </button>
                  <button className="flex items-center">
                    <HiOutlineChat className="me-1 w-6 h-6" />
                    <span>ارتباط با پشتیبانی</span>
                  </button>
                  <button
                    className="flex items-center text-red-600"
                    onClick={() => Appcontext.logOut()}
                  >
                    <HiOutlineLogin className="rotate-180 me-1 w-6 h-6" />
                    <span>خروج</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
