import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FooterComponent from "../../Components/Footer/FooterComponent";
import MobileNavbar from "../../Components/Navbar/MobileNavbar";
import {
  HiOutlineMinusCircle,
  HiOutlinePlusCircle,
  HiOutlineCheck,
} from "react-icons/hi";
import Button from "../../Components/Input/Button";
import { useParams } from "react-router-dom";
export default function ProductInfo() {
  const { productName } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [categoryTitle, setCategoryTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [ariaBox, setAriafiBox] = useState("moarefi");
  const [articleThisProduct, setArticleThisProduct] = useState({});
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:4000/v1/courses/${productName}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          localStorageData === null ? null : localStorageData
        }`,
      },
    })
      .then((res) => res.json())
      .then((productinfo) => {
        setProductDetails(productinfo);
        setCategoryTitle(productinfo.categoryID.title);
        setProductPrice(productinfo.price);
        console.log(productinfo);
      });
    fetch(`http://localhost:4000/v1/articles/${productName}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          localStorageData === null ? null : localStorageData
        }`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((productinfo) => {
        console.log(productinfo);
      });
  }, []);

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className="main ">
        <div className="topmain">
          {/* product informaition header */}
          <div className="row h-[90vh] flex items-center">
            <div className="w-1/2 h-full">
              <div className="cover-product w-full h-full flex flex-col items-center justify-evenly">
                <img
                  src={`http://localhost:4000/courses/covers/${productDetails.cover}`}
                  alt="cover"
                  className="w-1/2 h-1/2 border-s border-b border-zinc-500 rounded-2xl"
                />
                <div className="othercovers flex items-center justify-center gap-5">
                  <img
                    src="./../images/products/p1.png"
                    alt="cover"
                    className="w-32 h-32  border-s border-b border-zinc-300 rounded-2xl"
                  />
                  <img
                    src="./../images/products/p1.png"
                    alt="cover"
                    className="w-32 h-32  border-s border-b border-zinc-300 rounded-2xl"
                  />
                  <img
                    src="./../images/products/p1.png"
                    alt="cover"
                    className="w-32 h-32  border-s border-b border-zinc-300 rounded-2xl"
                  />
                  <img
                    src="./../images/products/p1.png"
                    alt="cover"
                    className="w-32 h-32  border-s border-b border-zinc-300 rounded-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-px h-5/6 bg-orange-300"></div>
            <div className="w-1/2 h-5/6 font-Dana">
              <div className="w-full h-full flex flex-col justify-between px-5">
                <div className="space-y-5">
                  <h1 className="font-DanaDemiBold text-3xl dark:text-orange-200">
                    {productDetails.name}
                  </h1>
                  <div className="flex items-center gap-5">
                    <div className="flex gap-5 border rounded-2xl text-zinc-500 px-5 w-52">
                      <span>دیدگاه های کاربران</span>
                      <span>16</span>
                    </div>
                    <div className="flex justify-center gap-5 border rounded-2xl text-zinc-500 px-5 w-32">
                      <span>{categoryTitle}</span>
                    </div>
                  </div>
                </div>
                <p className="dark:text-slate-200">
                  {productDetails.description}
                </p>
                <div className="space-y-5">
                  <div className="flex items-center gap-5">
                    <div className="w-1/2 border-2 border-dashed border-teal-600 p-2 rounded-2xl text-sm text-zinc-500">
                      <div className="flex items-center">
                        <HiOutlineCheck />
                        <span>ارسال رایگان خرید های بالای 500 هزار تومان</span>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheck />
                        <span>ارسال روزانه</span>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheck />
                        <span>ضمانت تازه بودن قهوه</span>
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-between">
                      <label
                        htmlFor=""
                        className="font-MorabbaMedium dark:text-white"
                      >
                        قیمت محصول:
                      </label>
                      <p className="lg:text-3xl text-base leading-7 font-DanaDemiBold text-teal-600 dark:text-emerald-500">
                        {productPrice.toLocaleString()}
                        <span className="lg:text-[14px] text-[12px] leading-5 font-Dana">
                          تومان
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-zinc-600 p-2">
                    <div className="flex items-center">
                      <button>
                        <HiOutlinePlusCircle className="text-2xl w-12 text-teal-500" />
                      </button>
                      <p className="text-xl text-orange-200">1</p>
                      <button>
                        <HiOutlineMinusCircle className="text-2xl w-12 text-red-500" />
                      </button>
                    </div>
                    <Button className="bg-orange-200 border-orange-200 text-zinc-700  rounded-2xl border-2 py-2 w-52 text-center text-lg transition-all hover:bg-transparent hover:border-orange-200 hover:text-orange-200 font-DanaMedium">
                      خرید محصول
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className=" bg-zinc-200">
              <div className="font-Dana w-full flex  container">
                <ul className="font-DanaMedium flex items-center justify-start gap-5 w-3/4 h-16 px-5 py-1 transition-all duration-500">
                  <li
                    className={`${
                      ariaBox === "moarefi" && "bg-zinc-600 text-orange-200"
                    } h-full flex items-center rounded-lg px-2`}
                    onClick={() => setAriafiBox("moarefi")}
                  >
                    معرفی محصول
                  </li>
                  <li
                    className={`${
                      ariaBox === "learning" && "bg-zinc-600 text-orange-200"
                    } h-full flex items-center rounded-lg px-2`}
                    onClick={() => setAriafiBox("learning")}
                  >
                    آموزش رایگان
                  </li>
                  <li
                    className={`${
                      ariaBox === "comments" && "bg-zinc-600 text-orange-200"
                    } h-full flex items-center rounded-lg px-2`}
                    onClick={() => setAriafiBox("comments")}
                  >
                    نظرات کاربران
                  </li>
                </ul>
                <div className="border-s-2 border-zinc-700 h-16 w-1/4 px-5">
                  <p>محصولات دیگر</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {/* product informaion articles and comments */}
              <div className="w-3/4">
                <div>
                  {ariaBox === "moarefi" && <div>moarefi</div>}
                  {ariaBox === "learning" && <div>learn</div>}
                  {ariaBox === "comments" && <div>comment</div>}
                </div>
              </div>
              {/* product information sidbar and related product*/}
              <div className="w-1/4">s</div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
