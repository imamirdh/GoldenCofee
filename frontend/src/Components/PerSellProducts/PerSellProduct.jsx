import React, { useState } from "react";
import SectionHeader from "../Products/SectionHeader";
import ProductItem from "../Products/ProductItem";
import { IoIosArrowBack } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function PerSellProduct() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="lg:pt-20 pt-10">
      <SectionHeader
        title={"محصولات پر فروش"}
        subtitle={"پیشنهاد قهوه خور ها ..."}
      >
        <div className="child:lg:w-11 child:lg:h-11 child:w-9 child:h-9 child:rounded-full child:bg-white child:lg:p-[9px] flex items-center justify-center gap-[18px] child:dark:bg-zinc-700 child:dark:text-white">
          <button ref={navigationPrevRef}>
            <IoIosArrowBack className="lg:w-[26px] lg:h-[26px] w-5 h-5 mx-auto rotate-180" />
          </button>
          <button ref={navigationNextRef}>
            <IoIosArrowBack className="lg:w-[26px] lg:h-[26px] w-5 h-5 mx-auto" />
          </button>
        </div>
      </SectionHeader>
      <div className="persellproducts container mt-12">
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef,
              nextEl: navigationNextRef,
            }}
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p1.png"}
                price={175000}
                lastprice={175000}
                score={2}
                count={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p2.png"}
                price={175000}
                lastprice={175000}
                count={5}
                discount={12}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p3.png"}
                price={175000}
                lastprice={175000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p4.png"}
                price={175000}
                lastprice={175000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p1.png"}
                price={175000}
                lastprice={175000}
                count={5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p4.png"}
                price={175000}
                lastprice={175000}
                count={5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p3.png"}
                price={175000}
                lastprice={175000}
                count={5}
                discount={12}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p2.png"}
                price={175000}
                lastprice={175000}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden lg:flex">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef,
              nextEl: navigationNextRef,
            }}
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p1.png"}
                price={175000}
                lastprice={175000}
                score={2}
                count={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p2.png"}
                price={175000}
                lastprice={175000}
                count={5}
                discount={12}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p3.png"}
                price={175000}
                lastprice={175000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p4.png"}
                price={175000}
                lastprice={175000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p1.png"}
                price={175000}
                lastprice={175000}
                count={5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p4.png"}
                price={175000}
                lastprice={175000}
                count={5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p3.png"}
                price={175000}
                lastprice={175000}
                count={5}
                discount={12}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title={"قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی"}
                img={"./images/products/p2.png"}
                price={175000}
                lastprice={175000}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PerSellProduct;
