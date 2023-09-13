import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((result) => setProducts(result));

      console.log(products)
  }, []);

  return (
    <div className="lg:pt-48 pt-8 lg:pb-5 products">
      <SectionHeader
        btntitle={"مشاهده همه محصولات"}
        title={"جدیدترین محصولات"}
        subtitle={"فرآوری شده از دانه قهوه"}
      />
      <div className="productmobile container lg:hidden mt-5">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
              score={1}
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
      <div className="hidden body container lg:flex flex-wrap gap-5 mt-12 ">
        {products.slice(0, 8).map((product) => (
          <ProductItem
            title={product.name}
            img={`http://localhost:4000/courses/covers/${product.cover}`}
            price={product.price.toLocaleString()}
            lastprice={product.price.toLocaleString()}
            shortName={product.shortName}
            score={2}
            count={1}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
