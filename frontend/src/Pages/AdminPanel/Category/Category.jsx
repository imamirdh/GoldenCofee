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
function Category(props) {
  const appcontext=useContext(AppContext)
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      shortname: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  function getAllCategories() {
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        console.log(allCategories);
        setCategories(allCategories);
      });
  }

  const createNewCategory = (event) => {
    event.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const newCategoryInfo = {
      title: formState.inputs.title.value,
      name: formState.inputs.shortname.value,
    };

    fetch("http://localhost:4000/v1/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData}`,
      },
      body: JSON.stringify(newCategoryInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "دسته بندی  با موفقیت اضافه شد",
          icon: "success",
          confirmButtonColor: "#10b981",
        }).then(() => {
          getAllCategories();
        });
      });
  };

  const removeCategory = (categoryID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از حذف دسته بندی اطمینان داری؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
      confirmButtonColor: "#f43f5e",
      color: appcontext.isDark ? "#fed7aa" : "",
      background: appcontext.isDark ? "#3f3f46" : "",
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/category/${categoryID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData}`,
          },
        })
          .then((res) => res.json())
          .then((result) => {
            Swal.fire({
              title: "دسته بندی  با موفقیت حذف شد",
              icon: "success",
              confirmButtonColor: "#10b981",
            }).then(() => {
              getAllCategories();
            });
          });
      }
    });
  };

  const updateCategory = (categoryID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "تغییر نام دسته بندی  ",
      input: "text",
      confirmButtonColor: "#10b981",
      color: appcontext.isDark ? "#fed7aa" : "",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value.trim() !== 0) {
        fetch(`http://localhost:4000/v1/category/${categoryID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData}`,
          },
          body: JSON.stringify({
            title: result.value,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            Swal.fire({
              title: "دسته بندی مورد نظر با موفقیت ویرایش شد",
              icon: "success",
              confirmButtonColor: "#10b981",
            }).then(() => {
              getAllCategories();
            });
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
              className={`lg:w-[33%] h-12 dark:text-gray-200`}
            />
            <InputForm
              element="input"
              id="shortname"
              onInputHandler={onInputHandler}
              lable="لینک"
              validations={[requiredValidator(), minValidator(3)]}
              className={`lg:w-[33%] h-12 dark:text-gray-200`}
            />
            <Button onClick={(e)=>createNewCategory(e)} className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana">
              افزودن
            </Button>
          </div>
        </form>
      </div>
      <div className="p-2">
        <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
          لیست دسته بندی ها
        </p>
        <Table th={["ردیف", "عنوان", "کنترل"]}>
          {categories.map((category , index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{category.title}</td>
              <td>
                <Button onClick={()=>removeCategory(category._id)} className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                  <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                  <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                    حذف
                  </span>
                </Button>
                <Button onClick={()=>updateCategory(category._id)} className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-yellow-500 transition-all">
                  <HiOutlinePencil className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-yellow-500 dark:text-zinc-300" />
                  <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                    ویرایش
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

export default Category;
