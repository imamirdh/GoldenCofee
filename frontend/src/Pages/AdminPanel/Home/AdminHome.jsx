import React from "react";
import Feature from "./../../../Components/AdminPanel/Home/CountBox"
import { BiShoppingBag } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import Chart from "./../../../Components/AdminPanel/Home/Chart"
import Table from "./../../../Components/AdminPanel/Table/Table";
function Home(props) {
  return (
    <div className="px-2 h-full">
      {/* count info */}
      <div className="lg:flex items-center gap-5 py-2 space-y-2 lg:space-y-0">
        <Feature
          title="تعداد محصولات سایت"
          icon={<BiShoppingBag />}
          countproducts="20"
        />
        <Feature
          title="تعداد کاربران سایت"
          icon={<FiUsers />}
          countproducts="36"
        />
      </div>
      {/* sell chart */}
      <div>
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          نمودار فروش
        </p>
        <Chart />
      </div>
      {/* last peaple to register */}
      <div>
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          آخرین افراد ثبت نام شده
        </p>
        <Table
          th={["نام", "نام کاربری", "ایمیل", "شماره تلفن", "تاریخ ثبت نام"]}
        >
          <tr>
            <td>امیررضا</td>
            <td>imamirdh</td>
            <td>imamirdh@gmail.com</td>
            <td>091212345678</td>
            <td></td>
          </tr>
          <tr>
            <td>امیررضا</td>
            <td>imamirdh</td>
            <td>imamirdh@gmail.com</td>
            <td>091212345678</td>
            <td></td>
          </tr>
          <tr>
            <td>امیررضا</td>
            <td>imamirdh</td>
            <td>imamirdh@gmail.com</td>
            <td>091212345678</td>
            <td></td>
          </tr>
          <tr>
            <td>امیررضا</td>
            <td>imamirdh</td>
            <td>imamirdh@gmail.com</td>
            <td>091212345678</td>
            <td></td>
          </tr>
        </Table>
      </div>
    </div>
  );
}

export default Home;
