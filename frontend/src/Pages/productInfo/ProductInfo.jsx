import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FooterComponent from "../../Components/Footer/FooterComponent";
import MobileNavbar from "../../Components/Navbar/MobileNavbar";
import {
  HiOutlineMinusCircle,
  HiOutlinePlusCircle,
  HiOutlineCheck,
  HiOutlineUserCircle,
} from "react-icons/hi";
import domPurify from 'dompurify'
import { RiAdminLine } from "react-icons/ri";
import { IoArrowRedoSharp } from "react-icons/io5";
import Button from "../../Components/Input/Button";
import { useParams, Link } from "react-router-dom";
import InputForm from "../../Components/AdminPanel/Input/Input";
import AppContext from "../../Context/AppContext";
import Swal from "sweetalert2";
export default function ProductInfo() {
  const { productName } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [categoryTitle, setCategoryTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [ariaBox, setAriafiBox] = useState("moarefi");
  const appcontext = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
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
        setComments(productinfo.comments);
        console.log(productinfo.comments);
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

  const submitComment = (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:4000/v1/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData}`,
      },
      body: JSON.stringify({
        body: commentBody,
        courseShortName: productName,
        score: 5,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire({
          title: "کامنت موردنظر با موفقیت ثبت شد",
          icon: "success",
          buttons: "تایید",
        });
      });
  };
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className="main ">
        <div className="topmain">
          {/* product informaition header */}
          <div className="row h-[90vh] flex items-center p-5">
            <div className="w-2/5 h-5/6 bg-transparent rounded-lg">
              <div className="cover-product w-full h-full flex flex-col items-center justify-evenly">
                <div className="bg-zinc-300 dark:bg-zinc-600 rounded-2xl p-5">
                  <img
                    src={`http://localhost:4000/courses/covers/${productDetails.cover}`}
                    alt="cover"
                    className=" rounded-2xl"
                  />
                </div>
                <div className="othercovers flex items-center justify-center gap-5">
                  <div className="w-28 h-28 bg-zinc-200 dark:bg-zinc-500 rounded-2xl">
                    <img
                     src={`http://localhost:4000/courses/covers/${productDetails.cover}`}
                      alt="cover"
                      className=" rounded-2xl"
                    />
                  </div>
                  <div className="w-28 h-28 bg-zinc-200 dark:bg-zinc-500 rounded-2xl">
                    <img
                     src={`http://localhost:4000/courses/covers/${productDetails.cover}`}
                      alt="cover"
                      className=" rounded-2xl"
                    />
                  </div>
                  <div className="w-28 h-28 bg-zinc-200 dark:bg-zinc-500 rounded-2xl">
                    <img
                     src={`http://localhost:4000/courses/covers/${productDetails.cover}`}
                      alt="cover"
                      className=" rounded-2xl"
                    />
                  </div>
                  <div className="w-28 h-28 bg-zinc-200 dark:bg-zinc-500 rounded-2xl">
                    <img
                     src={`http://localhost:4000/courses/covers/${productDetails.cover}`}
                      alt="cover"
                      className=" rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/5 h-5/6 font-Dana">
              <div className="w-full h-full flex flex-col justify-between px-5">
                <div className="space-y-5">
                  <h1 className="font-DanaDemiBold text-3xl dark:text-orange-200">
                    {productDetails.name}
                  </h1>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-5 border border-emerald-500 rounded-2xl text-zinc-500 px-5 w-52">
                      <span>
                        {" "}
                        <HiOutlineCheck className="text-emerald-500 border-2 border-emerald-500 rounded-full text-xl" />{" "}
                      </span>
                      <span className="text-emerald-500">موجود در انبار</span>
                    </div>
                    <div className="flex gap-5 border rounded-2xl text-zinc-500 px-5 w-52">
                      <span>دیدگاه های کاربران</span>
                      <span>16</span>
                    </div>
                    <div className="flex justify-center gap-5 border rounded-2xl text-zinc-500 px-5 w-32">
                      <span>{categoryTitle}</span>
                    </div>
                  </div>
                </div>
                <div className="productinfodesc space-y-5 dark:text-slate-200 " dangerouslySetInnerHTML={{ __html: domPurify.sanitize(productDetails.description) }}>
                  
                </div>
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
          <div className="row container my-5">
            <div className="">
              <div className="font-Dana w-full flex  ">
                <ul className="font-DanaMedium flex items-center justify-center gap-5 w-full h-10 px-5 transition-all duration-500">
                  <li
                    className={`${
                      ariaBox === "moarefi" &&
                      "bg-zinc-200 rounded-t-lg dark:bg-zinc-600"
                    } h-full flex items-center px-2 cursor-pointer dark:text-orange-200 text-zinc-700`}
                    onClick={() => setAriafiBox("moarefi")}
                  >
                    معرفی محصول
                  </li>
                  <li
                    className={`${
                      ariaBox === "learning" &&
                      "bg-zinc-200 rounded-t-lg dark:bg-zinc-600"
                    } h-full flex items-center px-2 cursor-pointer dark:text-orange-200 text-zinc-700`}
                    onClick={() => setAriafiBox("learning")}
                  >
                    آموزش رایگان
                  </li>
                  <li
                    className={`${
                      ariaBox === "comments" &&
                      "bg-zinc-200 rounded-t-lg dark:bg-zinc-600 "
                    } h-full flex items-center  px-2 cursor-pointer dark:text-orange-200 text-zinc-700`}
                    onClick={() => setAriafiBox("comments")}
                  >
                    نظرات کاربران
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              {/* product informaion articles and comments */}
              <div className="w-full font-Dana">
                <div>
                  {ariaBox === "moarefi" && (
                    <div className="bg-zinc-50 dark:bg-zinc-600 rounded-lg p-5">
                      <h2 className="font-MorabbaBold text-xl text-orange-400 dark:text-orange-300 mb-5">
                        معرفی اجمالی محصول
                      </h2>
                      <p className="dark:text-gray-300">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                      </p>
                      <div className="w-full flex items-center justify-center">
                        <img
                          src="/images/products/p1.png"
                          alt=""
                          className=""
                        />
                        <img
                          src="/images/products/p2.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <h2 className="font-MorabbaBold text-xl text-orange-400 dark:text-orange-300 my-5">
                        آشنایی با طعم و دانه های این قهوه
                      </h2>
                      <p className="dark:text-gray-300">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                        و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                        متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                        در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                        ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
                        گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                        طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                        فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                        دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
                        جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                        استفاده قرار گیرد.
                      </p>
                      <h2 className="font-MorabbaBold text-xl text-orange-400 dark:text-orange-300 my-5">
                        نحوه دم آوری
                      </h2>
                      <div className="w-full flex items-center justify-between">
                        <div>
                          <p className="dark:text-gray-300">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است.
                          </p>
                          <p className="dark:text-gray-300">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است.
                          </p>
                          <p className="dark:text-gray-300">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است.
                          </p>
                        </div>
                        <img
                          src="/images/products/esperso.jpg"
                          alt=""
                          className=""
                        />
                      </div>
                      <h2 className="font-MorabbaBold text-xl text-orange-400 dark:text-orange-300 my-5">
                        سخن پایانی
                      </h2>
                      <p className="dark:text-gray-300">
                        هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌
                        اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید
                        پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و
                        فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند.
                        با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و
                        دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا
                        آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا
                        بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد
                        ترکید.
                      </p>
                    </div>
                  )}
                  {ariaBox === "learning" && (
                    <div className="bg-zinc-50 rounded-lg p-5 dark:bg-zinc-600">
                      learn
                    </div>
                  )}
                  {ariaBox === "comments" && (
                    <div className="bg-zinc-50 rounded-lg p-5 dark:bg-zinc-600">
                      <div className="comment">
                        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
                          افزودن نظر
                        </p>
                        {appcontext.isLogedIn ? (
                          <>
                            <form>
                              <textarea
                                value={commentBody}
                                onChange={(e) => setCommentBody(e.target.value)}
                                type="text"
                                className="bg-transparent w-full h-24 border-2 border-zinc-700 dark:border-orange-200 dark:text-zinc-200 outline-none rounded-lg p-2"
                                placeholder="نظر خود را بنویسید"
                              ></textarea>
                              <Button
                                disabled={commentBody.length < 10}
                                onClick={(e) => submitComment(e)}
                                className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana"
                              >
                                افزودن
                              </Button>
                            </form>
                            <div className="w-full h-px bg-zinc-300 dark:bg-zinc-500 my-5"></div>
                          </>
                        ) : (
                          <>
                            <div className="alertcomment border border-zinc-500 rounded-lg p-5">
                              <p>
                                برای ثبت نظر{" "}
                                <Link to="/login" className="text-teal-500">
                                  لاگین
                                </Link>{" "}
                                شوید
                              </p>
                            </div>
                            <div className="w-full h-px bg-zinc-300 dark:bg-zinc-500 my-5"></div>
                          </>
                        )}
                        {comments.map((comment) => (
                          <div className="">
                            <div className="w-full min-h-[100px] border bg-zinc-200 dark:border-none dark:bg-zinc-500 rounded-lg">
                              <div className="header flex items-center justify-between p-1 py-2 border-b border-zinc-400 dark:border-orange-200">
                                <div className="flex items-center gap-2">
                                  {comment.creator.role === "USER" ? (
                                    <HiOutlineUserCircle className="text-xl text-orange-300" />
                                  ) : (
                                    <RiAdminLine className="text-xl text-orange-300" />
                                  )}
                                  <p className="text-sm dark:text-orange-300">
                                    {" "}
                                    {comment.creator.name}
                                  </p>
                                </div>
                                <Button className="text-sm p-1 border border-zinc-500 dark:border-zinc-100 dark:text-zinc-100 rounded-lg px-2">
                                  پاسخ
                                </Button>
                              </div>
                              <div className="body p-2 text-sm dark:text-zinc-100">
                                <p>{comment.body}</p>
                              </div>
                            </div>
                            {comment.answerContent && (
                              <div className="flex my-2">
                                <IoArrowRedoSharp className="w-1/6 rotate-180 text-2xl text-bold dark:text-zinc-200" />
                                <div className="answerbody w-5/6">
                                  <div className="w-full min-h-[100px] border border-zinc-500 dark:bg-zinc-500 rounded-lg">
                                    <div className="header flex items-center justify-between p-1 py-2 border-b border-zinc-400">
                                      <div className="flex items-center gap-2">
                                        {comment.answerContent.creator.role ===
                                        "USER" ? (
                                          <HiOutlineUserCircle className="text-xl text-orange-300" />
                                        ) : (
                                          <RiAdminLine className="text-xl text-orange-300" />
                                        )}
                                        <p className="text-sm dark:text-orange-300">
                                          {" "}
                                          {comment.answerContent.creator.name}
                                        </p>
                                      </div>
                                      <Button className="text-sm p-1 border border-zinc-500 rounded-lg px-2 dark:border-zinc-100 dark:text-zinc-100">
                                        پاسخ
                                      </Button>
                                    </div>
                                    <div className="body p-2 text-sm dark:text-zinc-100">
                                      <p>{comment.answerContent.body}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* product information sidbar and related product*/}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
