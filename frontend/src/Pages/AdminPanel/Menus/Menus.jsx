import React, { useContext, useEffect, useState } from "react";
import {
  maxValidator,
  minValidator,
  requiredValidator,
} from "./../../../Validations/rules";
import Button from "./../../../Components/AdminPanel/Input/Button";
import InputForm from "./../../../Components/AdminPanel/Input/Input";
import Table from "./../../../Components/AdminPanel/Table/Table";
import { useForm } from "../../../Hooks/useForm";
import Swal from "sweetalert2";
import { MdOutlineAddShoppingCart, MdViewList } from "react-icons/md";
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineUserAdd,
  HiOutlineLockClosed,
} from "react-icons/hi";
import AppContext from "../../../Context/AppContext";
function Menus(props) {
  const [menus, setMenus] = useState([]);
  const [menuParent, setMenuParent] = useState("-1");
  const appcontext = useContext(AppContext);
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      href: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllMenus();
  }, []);

  function getAllMenus() {
    fetch("http://localhost:4000/v1/menus/all")
      .then((res) => res.json())
      .then((allMenus) => {
        console.log(allMenus);
        setMenus(allMenus);
      });
  }

  const removeMenu = (menuID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از حذف منو اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/menus/${menuID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "منو  با موفقیت حذف شد",
              icon: "success",
              confirmButtonColor: "#10b981",
            }).then(() => {
              getAllMenus();
            });
          }
        });
      }
    });
  };

  const createMenu = (event) => {
    event.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const newMenuInfo = {
      title: formState.inputs.title.value,
      href: formState.inputs.href.value,
      parent: menuParent === "-1" ? undefined : menuParent,
    };

    fetch(`http://localhost:4000/v1/menus`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuInfo),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        Swal.fire({
          title: "منو  با موفقیت منتشر شد",
          icon: "success",
          confirmButtonColor: "#10b981",
        }).then((result) => {
          getAllMenus();
        });
      }
    });
  };
  return (
    <>
      <div className="p-2">
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          افزودن دسته بندی جدید
        </p>
        <form action="" className="p-2">
          <div className="row lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
            <InputForm
              element="input"
              id="title"
              onInputHandler={onInputHandler}
              lable="عنوان "
              validations={[requiredValidator(), minValidator(3)]}
              className={`lg:w-1/2 h-12 dark:text-gray-200`}
            />
            <InputForm
              element="input"
              id="href"
              onInputHandler={onInputHandler}
              lable="لینک"
              validations={[requiredValidator(), minValidator(3)]}
              className={`lg:w-1/2 h-12 dark:text-gray-200`}
            />
          </div>
          <div className="row flex items-center gap-5 mt-5">
            <div className="flex flex-col lg:w-[33%] space-y-5">
              <label
                htmlFor=""
                className="font-DanaDemiBold dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300 "
              >
                منوی اصلی
              </label>
              <select
                onChange={(e) => setMenuParent(e.target.value)}
                class="bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full p-2.5 dark:bg-zinc-700 dark:border-orange-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-orange-300"
              >
                <option value="-1" selected>
                  دسته بندی مورد نظر را انتخاب کنید
                </option>
                {menus.map((menu) => (
                  <option value={menu._id}>{menu.title}</option>
                ))}
              </select>
            </div>
            <Button
              onClick={(e) => createMenu(e)}
              className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana"
            >
              افزودن
            </Button>
          </div>
        </form>
      </div>
      <div className="p-2">
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          لیست منو ها
        </p>
        <Table th={["ردیف", "عنوان", "مقصد", "فرزند", "کنترل"]}>
          {menus.map((menu, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{menu.title}</td>
              <td>{menu.href}</td>
              <td>{menu.parent ? menu.parent.title : ""}</td>
              <td>
                <Button
                  onClick={() => removeMenu(menu._id)}
                  className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all"
                >
                  <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                  <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                    حذف
                  </span>
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}

export default Menus;
