import React from "react";
function MainBannerCategory() {
  return (
    <>
      <div className="lg:my-20 my-8">
        <div className="container">
          <div className="mainbanners flex flex-wrap lg:flex-nowrap items-center gap-5 text">
            <div className="mainbannerright lg:w-1/2 w-full lg:h-[248px] h-[142px] rounded-2xl flex items-center">
              <div className="text-white space-y-7 mx-12">
                <h1 className="lg:text-4xl text-2xl font-medium leading-6">انواع قهوه</h1>
                <p className="lg:text-xl leading-6 lg:font-medium">
                  ترکیبی و تک خاستگاه
                </p>
              </div>
            </div>
            <div className="mainbannerleft lg:w-1/2 w-full lg:h-[248px] h-[142px] rounded-2xl flex items-center">
              <div className="text-white space-y-7 mx-12">
                <h1 className="lg:text-4xl text-2xl font-semibold leading-6">
                  پودر های فوری
                </h1>
                <p className="lg:text-xl leading-6 lg:font-medium">
                  نسکافه . هات چاکلت . ماسالا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBannerCategory;
