import React, { useEffect, useState } from "react";
import Feature from "./../../../Components/AdminPanel/Home/CountBox";
import { BiShoppingBag } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import Chart from "./../../../Components/AdminPanel/Home/Chart";
import Table from "./../../../Components/AdminPanel/Table/Table";
function Home(props) {
  const [adminHomeUser, setAdminHomeUser] = useState("");
  const [adminHomeProducts, setAdminHomeProducts] = useState("");
  const [lastUserToRegister, setLastUserToRegister] = useState([]);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/infos/p-admin`, {
      headers: {
        Authorization: `Bearer ${localStorageData}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAdminHomeUser(result.infos[0].count);
        setAdminHomeProducts(result.infos[1].count);
        setLastUserToRegister(result.lastUsers);
      });
  }, []);

  return (
    <div className="px-2 h-full">
      {/* count info */}
      <div className="lg:flex items-center gap-5 py-2 space-y-2 lg:space-y-0">
        <Feature
          title="تعداد محصولات سایت"
          icon={<BiShoppingBag />}
          countproducts={adminHomeProducts}
        />
        <Feature
          title="تعداد کاربران سایت"
          icon={<FiUsers />}
          countproducts={adminHomeUser}
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
          {lastUserToRegister.map((lastuser) => (
            <tr>
              <td>{lastuser.name}</td>
              <td>{lastuser.username}</td>
              <td>{lastuser.email}</td>
              <td>{lastuser.phone}</td>
              <td>{lastuser.createdAt.slice(0,10)}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Home;
