import React from 'react'
import MainBannerCategory from './MainBannerCategory'
import CategoryItem from './CategoryItem'
function Category() {
  return (
    <div>
        <MainBannerCategory/>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center lg:gap-[65px] gap-7">
          <CategoryItem title={"قهوه دمی و اسپرسو"} img={"/images/categories/category1.png"}/>
          <CategoryItem title={"لوازم جانبی و تجهیزات"} img={"/images/categories/category2.png"}/>
          <CategoryItem title={"اسپرسو ساز"} img={"/images/categories/category3.png"}/>
          <CategoryItem title={"پک تستر قهوه"} img={"/images/categories/category4.png"}/>
          <CategoryItem title={"قهوه ترک"} img={"/images/categories/category5.png"}/>
          </div>
        </div>
    </div>
  )
}

export default Category