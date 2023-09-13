import React from "react";
import SectionHeader from "../Products/SectionHeader";
import ArticlesBox from "./ArticlesBox";
function Articles() {
  return (
    <div>
      <SectionHeader title={"مطالب خواندنی"} btntitle={"مشاهده همه"} />
      <div className="container pt-12">
        <div className="lg:flex items-center gap-5 space-y-5 lg:space-y-0" >
          <ArticlesBox
            img={"/images/blogs/blog-1.png"}
            title={"طرز تهیه قهوه دمی با دستگاه اروپرس"}
            date={{ day: 21, month: "مرداد", year: 1402 }}
          />
          <ArticlesBox
            img={"/images/blogs/blog-2.png"}
            title={"یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز"}
            date={{ day: 21, month: "مرداد", year: 1402 }}
          />
          <ArticlesBox
            img={"/images/blogs/blog-3.png"}
            title={"طرز تهیه یک فنجان کافه زینو برزیلی"}
            date={{ day: 21, month: "مرداد", year: 1402 }}
          />
          <ArticlesBox
            img={"/images/blogs/blog-4.png"}
            title={"طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی"}
            date={{ day: 21, month: "مرداد", year: 1402 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
