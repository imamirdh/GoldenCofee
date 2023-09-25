import React, { useState } from "react";

import {
  maxValidator,
  minValidator,
  requiredValidator,
} from "./../../../Validations/rules";
import Button from "./../../../Components/AdminPanel/Input/Button"
import InputForm from "./../../../Components/AdminPanel/Input/Input"
import Table from "./../../../Components/AdminPanel/Table/Table";
import { useForm } from "../../../Hooks/useForm";

import { MdOutlineAddShoppingCart, MdViewList } from "react-icons/md";
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineUserAdd,
  HiOutlineLockClosed,
} from "react-icons/hi";
function Category(props) {
  const [formstate, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      support: {
        value: "",
        isValid: false,
      },
    },
    false
  );
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
              id="shortName"
              onInputHandler={onInputHandler}
              lable="لینک"
              validations={[requiredValidator(), minValidator(3)]}
              className={`lg:w-[33%] h-12 dark:text-gray-200`}
            />
            <Button className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana">
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
          <tr>
            <td>امیررضا</td>
            <td>imamirdh</td>
            <td>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                  حذف
                </span>
              </Button>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-yellow-500 transition-all">
                <HiOutlinePencil className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-yellow-500 dark:text-zinc-300" />
                <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">
                  ویرایش
                </span>
              </Button>
            </td>
          </tr>
        </Table>
      </div>
    </>
  );
}

export default Category;
