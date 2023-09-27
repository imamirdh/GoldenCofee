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
function Users(props) {
  const [pageHandle, setPageHanler] = useState("list");
  const [users, setUsers] = useState([]);
  const appcontext = useContext(AppContext);
  const [formstate, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/users`, {
      headers: {
        Authorization: `Bearer ${localStorageData}`,
      },
    })
      .then((res) => res.json())
      .then((allUsers) => {
        console.log(allUsers);
        setUsers(allUsers.reverse());
      });
  }

  const removeUser = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از حذف کاربر اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/users/${userID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کاربر موردنظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
              background: appcontext.isDark ? "#3f3f46" : "",
            }).then(() => {
              getAllUsers();
            });
          } else {
            Swal.fire({
              title: "حذف کاربر با مشکلی مواجه شد",
              icon: "error",
              buttons: "اوکی",
            });
          }
        });
      }
    });
  };

  const banUser = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از بن کاربر اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/users/ban/${userID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کاربر موردنظر با موفقیت بن شد",
              icon: "success",
              confirmButtonColor: "#10b981",
              color: appcontext.isDark ? "#fed7aa" : "",
              background: appcontext.isDark ? "#3f3f46" : "",
            }).then(() => {
              getAllUsers();
            });
          } else {
            Swal.fire({
              title: "بن کردن کاربر با مشکلی مواجه شد",
              icon: "error",
              buttons: "اوکی",
            });
          }
        });
      }
    });
  };

  const registerNewUser = (event) => {
    event.preventDefault();
    const newUserInfo = {
      name: `${formstate.inputs.name.value}`,
      username: formstate.inputs.username.value,
      email: formstate.inputs.email.value,
      phone: formstate.inputs.phone.value,
      password: formstate.inputs.password.value,
      confirmPassword: formstate.inputs.password.value,
    };

    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        Swal.fire({
          title: "کاربر مورد نظر با موفقیت اضافه شد",
          icon: "success",
          buttons: "اوکی",
        });
        getAllUsers();
      });
  };
  return (
    <>
      <div className="buttons flex items-center gap-2 mt-2 px-2">
        <Button
          className={` border-zinc-700 text-zinc-500  rounded-md border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 hover:text-orange-300 font-Dana flex items-center gap-2 ${
            pageHandle === "form" && "!border-orange-300 !text-orange-300"
          }`}
          onClick={() => setPageHanler("form")}
          icon={<HiOutlineUserAdd className="text-lg" />}
        >
          افزودن کاربر
        </Button>
        <Button
          className={`border-zinc-700 text-zinc-500  rounded-md border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 hover:text-orange-300 font-Dana flex items-center gap-2 ${
            pageHandle === "list" && "!border-orange-300 !text-orange-300"
          }`}
          onClick={() => setPageHanler("list")}
          icon={<MdViewList className="text-lg" />}
        >
          لیست کاربران
        </Button>
      </div>
      {pageHandle === "list" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            لیست کاربران
          </p>
          <Table
            th={[
              "نام",
              "نام کاربری",
              "ایمیل",
              "شماره تلفن",
              "تاریخ ثبت نام ",
              "کنترل",
            ]}
          >
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.createdAt.slice(0, 10)}</td>
                <td>
                  <Button
                    onClick={() => removeUser(user._id)}
                    className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all"
                  >
                    <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                    <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                      حذف
                    </span>
                  </Button>
                  
                  <Button onClick={()=>banUser(user._id)} className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                    <HiOutlineLockClosed className="text-zinc-500 text-lg  group-hover:text-rose-500 dark:text-zinc-300" />
                    <span className="w-28 absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                      بن کردن کاربر
                    </span>
                  </Button>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      )}
      {pageHandle === "form" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            افزودن کاربر جدید
          </p>
          <form action="" className="p-2">
            <div className="row lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <InputForm
                element="input"
                id="name"
                onInputHandler={onInputHandler}
                lable="نام و نام خانوادگی"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="username"
                onInputHandler={onInputHandler}
                lable="نام کاربری "
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="phone"
                onInputHandler={onInputHandler}
                lable="شماره تلفن"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
            </div>
            <div className="row mt-5 lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <InputForm
                element="input"
                id="email"
                onInputHandler={onInputHandler}
                lable="ایمیل"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="password"
                onInputHandler={onInputHandler}
                lable="رمز عبور "
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <Button onClick={(e)=>registerNewUser(e)} className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana">
                افزودن کاربر
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Users;
